Invoke-Expression "& ./install.mongodb.ps1"
Install-Module Mdbc
Import-Module Mdbc

function Confirm-WindowsServiceExists($name)
{   
   if (Get-Service -Name $name -ErrorAction SilentlyContinue -ErrorVariable WindowsServiceExistsError)
   {
       Write-Host "$name Exists on this server"
       return $true
   }

   if ($WindowsServiceExistsError)
   {
       Write-Host "server" $WindowsServiceExistsError[0].exception.message
   }

   return $false
}

$serviceName = "mdb27017"
$mongoDbDriverPath = "C:\mongodb"
$connectionString = "mongodb://localhost:27017"

if(-Not (Confirm-WindowsServiceExists($serviceName))){
    Invoke-MdbcCommand --install --serviceName $serviceName --serviceDisplayName "MongoDB Server Instance 27017" --serviceDescription "MongoDB Server Instance running on 27017"
}

$service = Get-Service -Name $name;

if ($arrService.Status -ne "Running"){
    Start-Service $ServiceName
    Write-Host "Starting " $ServiceName " service" 
    " ---------------------- " 
    " Service is now started"
}


