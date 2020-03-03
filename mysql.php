 <?php
 //Classes
class Participant
{
    public $VPCode 			= 			"-88";
    public $user            =           "-88";
    public $version			=			-88;
    
    public $response        =           "-88";
    public $RT              =           "-88";

	public function getPost($inp)
	{
		if (isset($inp['VPCode'])) {
			$this->VPCode = $inp['VPCode'];
		}
		if (isset($inp['user'])) {
			$this->user = $inp['user'];
		}
		if (isset($inp['version'])) {
			$this->version = $inp['version'];
		}
		if (isset($inp['response'])) {
			$this->response = implode(",", $inp['response']);
		}
		if (isset($inp['RT'])) {
			$this->RT = implode(",", $inp['RT']);
        }
	}
}

//Functions

function openConnection($host, $db, $us, $pw, $verbose=False)
{

	$conn = mysqli_connect($host, $us, $pw, $db);

	if (mysqli_connect_errno()) {
	    die('<p>Verbindung zum MySQL Server fehlgeschlagen: '.mysqli_connect_error().'</p>');
	} else {
		if ($verbose) {echo '<p>Verbindung zum MySQL Server erfolgreich aufgebaut.</p >';}
		return $conn;
	}
}

function newParticipant($conn, $VP, $verbose=TRUE)
{
	global $db_name;
	$sql = "INSERT INTO " . $db_name . " (VPCode, user, version) ".
	"VALUES ('" . $VP->VPCode . 
	"', '" . $VP->user . 
	"', '" . $VP->version . "')";
    echo $sql;
	if (mysqli_query($conn, $sql)) {
		if ($verbose) {echo "New record created successfully";} 
		//echodbId($conn, $VP); //später noch einfügen
	} else {
		if ($verbose) {echo "Error: " . $sql . "<br>" . mysqli_error($conn);}
	}
}

function updateResponse($conn, $VP, $verbose=False)
{
	global $db_name;
	$sql = "UPDATE " . $db_name . " SET response='" . $VP->response . "', RT='" . $VP->RT . "' WHERE VPCode='" . $VP->VPCode . "'";

	if (mysqli_query($conn, $sql)) {
	    if ($verbose or $VP->finished == "true") {echo "Record updated successfully";}
	} else {
	    if ($verbose) {echo "Error: " . $sql . "<br>" . mysqli_error($conn);}
	}

}

//Variables

$host_name = 'db757039269.db.1and1.com';
$database = 'db757039269';
$user_name = 'dbo757039269';
$password = '0Ko3cl9=ls';
$VP = new Participant();


$db_name = 'MatrizenJulie';

//Main
if (isset($_POST['phpCode'])) {
	$postData = $_POST;
	$phpCode = $postData['phpCode'];
	switch ($phpCode) {
		case 0:																		//New entry
			$VP->getPost($postData);
			$conn = openConnection($host_name, $database, $user_name, $password);
			newParticipant($conn, $VP);
			break;
		case 1:
			$VP->getPost($postData);
			$conn = openConnection($host_name, $database, $user_name, $password);
			updateResponse($conn, $VP);
			break;
		default:
			break;
	}
}

try {
    mysqli_close($conn);
} catch (Exception $e) {
    echo 'Exception caught: ',  $e->getMessage(), "\n";
}
?> 
