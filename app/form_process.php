<?php

$a = 'test';
print_r($_POST);

// define variables and set empty values
$name_error = $email_error = $phone_error = $url_error = "";
$name = $email = $phone = $message = $url = "";
print_r($a);
// form is submitted with POST method
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	if (empty($_POST["name"])) {
		$name_error = "Nome é requerido";
	} else {
		$name = test_input($_POST["name"]);
		// check if name only contains letters and whitespace
		if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
			$name_error = "Somente letras e espaço branco permitido";
		}
	}

	if (empty($_POST["email"])) {
		$email_error = "Email é requerido";
	}	else {
		$email = test_input($_POST["email"]);
		// check if e-mail adress is well-formed
		if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
			$email_error = "Invalid email format";
		}
	}

	if (empty($_POST["phone"])) {
		$phone_error = "Telefone é requerido";
	}	else {
		$phone = test_input($_POST["phone"]);=
		// check if phone is well-formed
		if (!preg_match("/^(\d[\s-]?)?[\(\[\s-]{0,2}?\d{3}[\)\]\s-]{0,2}?\d{3}[\s-]?\d{4}$/i", $phone)) {
			$phone_error = "Invalid phone number";
		}
	}

	if (empty($_POST["url"])) {
		$url_error = "";
	}	else {
		$url = test_input($_POST["url"]);
		// check if URL adress syntax is valid (this regular expression also allows dashes in the URL)
		if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+8@#\/%?=~_|!:,.;]*[-a-z0-9+8@#\/%=~_|]/i",$url)) {
			$url_error = "Invalid URL";
		}
	}

		if (empty($_POST["message"])) {
			$message = "";
		}	else {
			$message = test_input($_POST["message"]);
		}
	}

	function test_input($data) {
		$data = trim($data);
		$data = stripslashes($data);
		$data = htmlspecialchars($data);
		return $data;
	}