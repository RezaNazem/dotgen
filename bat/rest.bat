
SET slnName=%1
SET slnPath=%2

mkdir %slnPath%

dotnet new sln -n %slnName% -o %slnPath%
dotnet new webapi -n %slnName%.API -o %slnPath%\%slnName%.API --no-https
dotnet new classlib -n %slnName%.Common -o %slnPath%\%slnName%.Common
dotnet new classlib -n %slnName%.Logic -o %slnPath%\%slnName%.Logic
dotnet new classlib -n %slnName%.Service -o %slnPath%\%slnName%.Service
dotnet sln %slnPath%\%slnName%.sln add %slnPath%\%slnName%.Common\%slnName%.Common.csproj
dotnet sln %slnPath%\%slnName%.sln add %slnPath%\%slnName%.Logic\%slnName%.Logic.csproj
dotnet sln %slnPath%\%slnName%.sln add %slnPath%\%slnName%.Service\%slnName%.Service.csproj
dotnet sln %slnPath%\%slnName%.sln add %slnPath%\%slnName%.API\%slnName%.API.csproj
dotnet add %slnPath%\%slnName%.API\%slnName%.API.csproj reference %slnPath%\%slnName%.Common\%slnName%.Common.csproj
dotnet add %slnPath%\%slnName%.Logic\%slnName%.Logic.csproj reference %slnPath%\%slnName%.Common\%slnName%.Common.csproj
dotnet add %slnPath%\%slnName%.Service\%slnName%.Service.csproj reference %slnPath%\%slnName%.Common\%slnName%.Common.csproj
dotnet add %slnPath%\%slnName%.api\%slnName%.API.csproj  package NLOG --version 4.7.9
dotnet add %slnPath%\%slnName%.api\%slnName%.API.csproj  package NLOG.Web.AspNetCore --version 4.12.0
dotnet add %slnPath%\%slnName%.api\%slnName%.API.csproj  package Newtonsoft.Json --version 13.0.1
dotnet add %slnPath%\%slnName%.Common\%slnName%.Common.csproj  package Newtonsoft.Json --version 13.0.1