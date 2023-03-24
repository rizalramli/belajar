<?php

echo 'Name : ';
echo 'Eko Kurniawan Khannedy';
echo "\n";

echo "Name : ";
echo "Eko\t Kurniawan\t Khannedy\n";

// Heredoc
echo <<<EKO
Selamat belajar PHP
sekarang, kita belajar tipe data string
ini adalah cara ke-3 membuat string
bisa menggunakan heredoc
EKO;

// nowdoc
echo <<<'EKO'
Selamat belajar PHP
sekarang, kita belajar tipe data string
ini adalah cara ke-3 membuat string
bisa menggunakan heredoc
EKO;
