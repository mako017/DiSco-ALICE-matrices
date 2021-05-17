<?php

require_once 'config.php';
$postData = json_decode(urldecode(file_get_contents("php://input")),true);
$payload = isset($postData['payload']) ? $postData['payload'] : '';
$participantGateway = new ParticipantGateway();
$participant = new Participant($payload);
$participantGateway->createParticipant($participant);

class Participant{
	public $VPCode =  "";
	public $persCode =  "";
	public $nickName =  "";

	public $response =  "";
	public $RT =  "";
	public $log =  "";

    public $phpCode = -1;

    public function __construct($postData) {
        $this->VPCode = $postData["VPCode"];
        $this->persCode = $postData["persCode"];
        $this->nickName = $postData["nickName"];

        $this->response = implode(";", $postData["response"]) ;
        $this->RT = implode(";",$postData["RT"]);
        $this->log = $postData["log"];

        $this->phpCode = $postData["phpCode"];
    }
}

class ParticipantGateway{
    private function userExists(Participant $participant)
    {
        $exists = DB::queryFirstRow("SELECT `VPCode` FROM `matrices_results` WHERE `VPCode`=%s", $participant->VPCode);
        if ($exists !== null) return true;
        return false;
    }

    public function createParticipant(Participant $participant){
        if($this->userExists($participant)){
            $this->updateParticipant($participant);
            return;
        }
        DB::insert("matrices_results",[
            "VPCode" => $participant->VPCode,
            "persCode" => $participant->persCode,
            "nickName" => $participant->nickName,
            "response" => $participant->response,
            "RT" => $participant->RT,
            "log" => $participant->log,
            "phpCode" => $participant->phpCode,
        ]);
        if (DB::affectedRows() > 0) {
            serverResponse("created");
        }
        else{
            serverResponse("creationFailed");
        }
    }

    public function updateParticipant(Participant $participant){
        DB::update('matrices_results',
        [
            "VPCode" => $participant->VPCode,
            "persCode" => $participant->persCode,
            "nickName" => $participant->nickName,
            "response" => $participant->response,
            "RT" => $participant->RT,
            "log" => $participant->log,
            "phpCode" => $participant->phpCode,
        ],
        "VPCode=%s", $participant->VPCode);
    }
}