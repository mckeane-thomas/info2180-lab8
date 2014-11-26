<?php
mysql_connect(
"0.0.0.0",
"mckeanethomas"
);
mysql_select_db("world");


$LOOKUP = $_REQUEST['lookup'];
#$result = $_get

# execute a SQL query on the database
$results = mysql_query("SELECT * FROM countries WHERE name LIKE '%$LOOKUP%';");
$results_1 = mysql_query("SELECT * FROM countries';");
print $results;
print $results_1;
# loop through each country
while ($row = mysql_fetch_array($results)) {
  ?>
  <li> <?php echo $row["name"]; ?>, ruled by <?php echo $row["head_of_state"]; ?> </li>
  <?php
}
?>
