import { from, interval, map, of, switchMap, take, tap } from "rxjs";
import { Marble } from "./marble";
    
// Marble.createMarbleGenerator()
//     .pipe(take(10))
//     .subscribe((marble: Marble) => {
//         console.log(marble);
//         const marbleImage = document.createElement("img");
//         marbleImage.src = marble.ImageSrc;
//         marbleImage.style.display = "block";
//         document.body.appendChild(marbleImage);
//     });

const trackContainer = document.createElement("div");
trackContainer.classList.add("track-container");
document.body.appendChild(trackContainer);

const marbleTrackLeft = document.createElement("div");
marbleTrackLeft.classList.add("marble-track");
trackContainer.appendChild(marbleTrackLeft);

const marbleTrackMiddle = document.createElement("div");
marbleTrackMiddle.classList.add("marble-track");
trackContainer.appendChild(marbleTrackMiddle);

const marbleTrackRight = document.createElement("div");
marbleTrackRight.classList.add("marble-track");
trackContainer.appendChild(marbleTrackRight);