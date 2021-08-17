<html>

<head></head>

<body>
    <?php
    $dbconnect = pg_connect("host=localhost port=5432
                dbname=AdessoBasta user=postgres password=password")
        or die('Could not connect: ' . pg_last_error());
    if (!(isset($_POST['loginButton'])))
        header("Location: index.html");
    else {
        $loginUser = $_POST['loginUser'];
        $q1 = "SELECT * FROM utenti WHERE username= $1";
        $result = pg_query_params($dbconnect, $q1, array($loginUser));
        if (!($line = pg_fetch_array($result, null, PGSQL_ASSOC))) {
            header("Location: index.html?prob=4"); //Not registered
            exit;
        } else {
            $loginPassword = md5($_POST['loginPassword']);
            $q2 = "SELECT * FROM utenti WHERE username = $1 AND usrpassword = $2";
            $result = pg_query_params($dbconnect, $q2, array($loginUser, $loginPassword));
            if (!($line = pg_fetch_array($result, null, PGSQL_ASSOC))) {
                header("Location: index.html?prob=5"); //Wrong password
                exit;
            } else {
                setcookie("Username", $loginUser, time() + 365 * 24 * 60 * 60, "/"); //Expiration after one year
                header("Location: index.html");
                exit;
            }
        }
    }
    header("Location: index.html?prob=3");
    exit;
    ?>
</body>

</html>