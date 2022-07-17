# CoMitra

![IMG](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJiwcsCaKCz1UbNEDOgkZbpgz-vSe_D-PI7_83-0IGvvdKM8Cak3vmvdtaCnVbWQWmNgU92m3nrkzOrHmcPWWvNxgxZUl7Vn17xLs8HpAi9KUstiuZNL6hVyWgg6MSrM5vTI13TF25qp5D3P559NRoD6sDJ-OUPaCxgbyTgsFbrEnFCUw6YWjQ8sRf/s1365/image.png)

[CoMitra](https://soumodip-paul.github.io/CoMitra) is a vaccine finder application based on _[CoWIin Public APIS](https://apisetu.gov.in/public/marketplace/api/cowin)_ to provide the current availabilty of vaccine and download the Vaccine Certificate.
This web application finds the current availablity status of vaccination using the __PINCODE__ of the area or using the Provied ***State and District lists*** (_This uses the official list of State and Districts In the API SETU Portal_) of a selected date. You can also find the age restrictions, Time of vaccination, Number of Doses available, Number of Dose 1 available, Number of Dose 2 available, Number of Dose 3 available, Fees and available time slots in the application. To download your vaccination certficate you should have the Mobile Number Registered with CoWin Portal (For Auuthintication) and the ReferenceID mentioned in Appointment Slip or CoWin Portal.

![IMG](https://blogger.googleusercontent.com/img/a/AVvXsEglsl4ASVE56YP8YL3qH1Yw6xOtrkd-UBgbjRyoLiScuxBtlu399CfVJyVKW9Ey_rH6g8bN6f17Re3UVRFJTlW043uWYNiVk0gWNdaoLftmNR0z1lXa7n9Yj5hW_0b3tMSkijdVuKNA_gB4G4MBSzXirWvFPQAUjNMLgj9vFR5pIhOsdgtutVRlWk41)

> __We donot collect or share your personal data like Phone Number Or AuthToken.__

## Functions

1. You can find the Availabe Vaccination centers using the ___PINCODE___.
2. You can find the Available Vaccination centers using the ___State and District Names___.
3. You can Search and filter the results.
4. You can download the Vaccinationation Certificate

> TRY OUT this Application from [here](https://comitra.ga/)

![IMG](https://blogger.googleusercontent.com/img/a/AVvXsEh39a5Pdmv8Corg9CuUsD4QChKq7KQVd-9pnsfwbmElx6nAzX9pR-6KRdU8USsmuzKtySw4E30eTMHiA5pWXyh4V5DU2Os1KkHX785A3k8F4cdpkwSTryt4DUZojF0aK43ugXD1FWuyFArfQwJFfM74w8L8pYxehgYLnbHbuH0oEgBKQ6VEo6c3UIAv)


## Developer Guide 

> This project uses ReactJS so you must have install NodeJS installed.
> If not then you can download from [here](https://nodejs.org/en/download/)

### Download this project

You can download the project using the following link<br />
[Click Here to Download](https://github.com/Soumodip-Paul/CoMitra/zipball/main)

### Clone this Project

1. Create an empty folder 
2. Goto the folder and  open <br/> `Powershell` for windows and <br/> `Terminal` for MacOS or Linux
3. Paste the code below 

```bash
git clone https://github.com/Soumodip-Paul/CoMitra.git --single-branch 
```
4. Press enter 

Now the code is successfully copied to your desired folder

> To use git command you need to download `Git` from [Git-Scm Official website](https://git-scm.com/downloads "Download Git")

### Running the project

1. Goto the project root folder and open `Terminal` (For MacOS and Linux) or `PowerShell` (for windows)
2. Run the following command
```
npm i
```
3. Then 
```
npm run start
```
To run the project in local server

### Production Build

You can obtain a production by running the following command
```
npm run build
```

