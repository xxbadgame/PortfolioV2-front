const OpenSoftSkills = "M277.334 44.6662C263.173 30.5053 246.361 19.2722 227.859 11.6084C209.357 3.94452 189.527 -4.53589e-06 169.5 0C149.473 4.5359e-06 129.643 3.94454 111.141 11.6084C92.6386 19.2722 75.8271 30.5053 61.6662 44.6662L104.8 87.7998C113.296 79.3032 123.383 72.5633 134.484 67.965C145.586 63.3667 157.484 61 169.5 61C181.516 61 193.414 63.3667 204.516 67.965C215.617 72.5633 225.704 79.3032 234.2 87.7997L277.334 44.6662Z"
const OpenData = "M61 299.134C75.1609 313.294 91.9724 324.528 110.475 332.191C128.977 339.855 148.807 343.8 168.834 343.8C188.86 343.8 208.691 339.855 227.193 332.191C245.695 324.528 262.507 313.294 276.668 299.133L233.534 256C225.038 264.497 214.951 271.236 203.849 275.835C192.748 280.433 180.85 282.8 168.834 282.8C156.818 282.8 144.92 280.433 133.818 275.835C122.717 271.236 112.63 264.497 104.134 256L61 299.134Z"
const OpenBusiness = "M293.134 278.668C307.294 264.507 318.528 247.695 326.191 229.193C333.855 210.691 337.8 190.86 337.8 170.834C337.8 150.807 333.855 130.977 326.191 112.475C318.528 93.9724 307.294 77.1609 293.133 63L250 106.134C258.497 114.63 265.236 124.717 269.835 135.818C274.433 146.92 276.8 158.818 276.8 170.834C276.8 182.85 274.433 194.748 269.835 205.849C265.236 216.951 258.497 227.038 250 235.534L293.134 278.668Z" 
const OpenComputer = "M4662 62.6662C30.5053 76.8272 19.2722 93.6386 11.6084 112.141C3.94452 130.643 -4.53589e-06 150.473 0 170.5C4.5359e-06 190.527 3.94454 210.357 11.6084 228.859C19.2722 247.361 30.5053 264.173 44.6662 278.334L87.7998 235.2C79.3032 226.704 72.5633 216.617 67.965 205.516C63.3667 194.414 61 182.516 61 170.5C61 158.484 63.3667 146.586 67.965 135.484C72.5633 124.383 79.3032 114.296 87.7997 105.8L44.6662 62.6662Z"

const CloseSoftSkills = "M260.334 44.6662C246.173 30.5053 229.361 19.2722 210.859 11.6084C192.357 3.94452 172.527 -4.53589e-06 152.5 0C132.473 4.5359e-06 112.643 3.94454 94.1407 11.6084C75.6386 19.2722 58.8271 30.5053 44.6662 44.6662L87.7997 87.7998C96.2963 79.3032 106.383 72.5633 117.484 67.965C128.586 63.3667 140.484 61 152.5 61C164.516 61 176.414 63.3667 187.516 67.965C198.617 72.5633 208.704 79.3032 217.2 87.7997L260.334 44.6662Z"
const CloseBusiness = "M44 260.134C58.1609 274.294 74.9724 285.528 93.4746 293.191C111.977 300.855 131.807 304.8 151.834 304.8C171.86 304.8 191.691 300.855 210.193 293.191C228.695 285.528 245.507 274.294 259.668 260.133L216.534 217C208.038 225.497 197.951 232.236 186.849 236.835C175.748 241.433 163.85 243.8 151.834 243.8C139.818 243.8 127.92 241.433 116.818 236.835C105.717 232.236 95.6301 225.497 87.1335 217L44 260.134Z"
const CloseComputer = "M260.134 260.668C274.294 246.507 285.528 229.695 293.191 211.193C300.855 192.691 304.8 172.86 304.8 152.834C304.8 132.807 300.855 112.977 293.191 94.4746C285.528 75.9724 274.294 59.1609 260.133 45L217 88.1335C225.497 96.6301 232.236 106.717 236.835 117.818C241.433 128.92 243.8 140.818 243.8 152.834C243.8 164.85 241.433 176.748 236.835 187.849C232.236 198.951 225.497 209.038 217 217.534L260.134 260.668Z"
const CloseData = "M44.6662 44.6662C30.5053 58.8272 19.2722 75.6386 11.6084 94.1408C3.94452 112.643 -4.53589e-06 132.473 0 152.5C4.5359e-06 172.527 3.94454 192.357 11.6084 210.859C19.2722 229.361 30.5053 246.173 44.6662 260.334L87.7998 217.2C79.3032 208.704 72.5633 198.617 67.965 187.516C63.3667 176.414 61 164.516 61 152.5C61 140.484 63.3667 128.586 67.965 117.484C72.5633 106.383 79.3032 96.2963 87.7997 87.7997L44.6662 44.6662Z"

const Data = document.querySelector('.CloseData');
const Computer = document.querySelector('.CloseComputer');
const Business = document.querySelector('.CloseBusiness');
const SoftSkills = document.querySelector('.CloseSoftSkills');

function fonctionCompetences(id){
    document.getElementById(id).classList.remove("opacity-0")
    anime({
        targets: '#'+id,
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 1000,
        delay: function(el, i) { return i * 250 },
      });
}

function DisparitionSkills(id){
    document.getElementById(id).classList.add("opacity-0")
}

function AttenteEtage(id,etage){
    setTimeout(() => fonctionCompetences(id), 1000*etage);
}

function AnimOuverture(selector, target, propTranslate , valeur){
    let isOpen = false;

    selector.addEventListener('click', () => {
        anime({
            targets : target,
            [propTranslate] : isOpen ? 0 : valeur,
        });

        if (isOpen == false && selector == SoftSkills){
            fonctionCompetences("RSS1");
            fonctionCompetences("RSS2");
            fonctionCompetences("RSS3");
            fonctionCompetences("BSS1");
            fonctionCompetences("BSS2");
            fonctionCompetences("BSS3");
        } else if(isOpen == true && selector == SoftSkills){
            DisparitionSkills("RSS1");
            DisparitionSkills("RSS2");
            DisparitionSkills("RSS3");
            DisparitionSkills("BSS1");
            DisparitionSkills("BSS2");
            DisparitionSkills("BSS3");
        }else if(isOpen == false && selector == Computer){
            fonctionCompetences("BC1");
            fonctionCompetences("BC2");
            fonctionCompetences("BC3");
            fonctionCompetences("RC1");
            fonctionCompetences("RC2");
            fonctionCompetences("RC3");
        }else if(isOpen == true && selector == Computer){
            DisparitionSkills("BC1");
            DisparitionSkills("BC2");
            DisparitionSkills("BC3");
            DisparitionSkills("RC1");
            DisparitionSkills("RC2");
            DisparitionSkills("RC3");
        }else if(isOpen == false && selector == Business){
            fonctionCompetences("RB1");
            fonctionCompetences("RB2");
            fonctionCompetences("RB3");
            fonctionCompetences("RB4");
            fonctionCompetences("RB5");
            fonctionCompetences("BB1");
            fonctionCompetences("BB2");
            fonctionCompetences("BB3");
            fonctionCompetences("BB4");
            fonctionCompetences("BB5");
        }else if(isOpen == true && selector == Business){
            DisparitionSkills("RB1");
            DisparitionSkills("RB2");
            DisparitionSkills("RB3");
            DisparitionSkills("RB4");
            DisparitionSkills("RB5");
            DisparitionSkills("BB1");
            DisparitionSkills("BB2");
            DisparitionSkills("BB3");
            DisparitionSkills("BB4");
            DisparitionSkills("BB5");
        }

        isOpen = !isOpen;
        

    });
}


AnimOuverture(Data, '.CloseData', 'translateY', 20);
AnimOuverture(Computer, '.CloseComputer', 'translateX', -20);
AnimOuverture(Business, '.CloseBusiness', 'translateX', 20);
AnimOuverture(SoftSkills, '.CloseSoftSkills', 'translateY', -20);

