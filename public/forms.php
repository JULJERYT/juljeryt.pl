<?php
// this is api i use for managing forms
// it has builtin captcha, db logging, discord webhook, ip and useragent detection
// feel free to use it and contribute to it
// if you found any bug or vulnerability, please report it to me: kontakt@juljeryt.pl

header('Content-Type: application/json');

// config and other shi
$turnstile_secret = 'your turnstile secret';
$db_host = 'your database host';
$db_name = 'your database name';
$db_user = 'your database user';
$db_pass = 'your database pass';
$discord_webhook = 'your dc webhook link';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // download data from form
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);
    $captcha_response = $_POST['cf-turnstile-response'] ?? '';
    $ip_address = $_SERVER['REMOTE_ADDR'];
    $user_agent = $_SERVER['HTTP_USER_AGENT'];

    // data validation
    if (!$name || !$email || !$message) {
        echo json_encode(['status' => 'error', 'message' => 'invalid input']);
        exit;
    }

    // turnstile verify
    $verify_url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
    $data = [
        'secret' => $turnstile_secret,
        'response' => $captcha_response,
        'remoteip' => $ip_address
    ];

    $options = [
        'http' => [
            'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
            'method'  => 'POST',
            'content' => http_build_query($data)
        ]
    ];

    $context  = stream_context_create($options);
    $verify_response = file_get_contents($verify_url, false, $context);
    $captcha_success = json_decode($verify_response, true);

    if (!$captcha_success['success']) {
        echo json_encode(['status' => 'error', 'message' => 'captcha verification failed, try again later']);
        exit;
    }

    // connect to db
    try {
        $pdo = new PDO("mysql:host=$db_host;dbname=$db_name;charset=utf8", $db_user, $db_pass, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
        ]);

        // db save
        $stmt = $pdo->prepare("INSERT INTO submissions (name, email, message, ip_address, user_agent) VALUES (?, ?, ?, ?, ?)");
        $stmt->execute([$name, $email, $message, $ip_address, $user_agent]);
    } catch (PDOException $e) {
        echo json_encode(['status' => 'error', 'message' => 'database error']);
        exit;
    }

    // send dc webhook message
    $discord_payload = json_encode([
        'content' => "@everyone nigga someone just filled yo form\n**name:** $name\n**email:** $email\n**message:**\n$message\n**ip:** $ip_address\n**user agent:** $user_agent"
    ]);

    $ch = curl_init($discord_webhook);
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $discord_payload);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    curl_close($ch);

    echo json_encode(['status' => 'success', 'message' => 'message sent successfully']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'invalid request method, go kill yoself']);
}
