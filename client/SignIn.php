<html>
    <head></head>
    <body>
        <?php
            $dbconnect = pg_connect("host=localhost port=5432
                dbname=AdessoBasta user=postgres password=password")
                or die('Could not connect: ' . pg_last_error());
            if(!(isset($_POST['signinButton'])))
                header("Location: index.html");
            else {
                $loginUser = $_POST['loginUser'];
                $q1 = "SELECT * FROM utenti WHERE username= $1";
                $result = pg_query_params($dbconnect, $q1, array($loginUser));
                if($line = pg_fetch_array($result, null, PGSQL_ASSOC)) {
                    header("Location: index.html?prob=1"); //Username already in use
                    exit;
                }
                else{
                    $loginEmail = $_POST['loginEmail'];
                    $q2 = "SELECT * FROM utenti WHERE email= $1";
                    $result = pg_query_params($dbconnect, $q2, array($loginEmail));
                    if($line = pg_fetch_array($result, null, PGSQL_ASSOC)) {
                        header("Location: index.html?prob=2"); //Email already registered
                        exit;
                    }
                    else {
                        $loginPassword = md5($_POST['loginPassword']);
                        $q3 = "INSERT INTO utenti VALUES ($1, $2, $3)";
                        $data = pg_query_params($dbconnect, $q3, array($loginUser, $loginEmail, $loginPassword));
                        if($data) {
                            setcookie("Username", $loginUser, time() + 365*24*60*60, "/"); //Expiration after one year
                            header("Location: index.html");
                            exit;
                        }
                    }
                }
            }
            header("Location: index_prova.html?prob=3");
            exit;
        ?>
    </body>
</html>
