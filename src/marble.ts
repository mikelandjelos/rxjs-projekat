import { interval, of, switchMap, take } from "rxjs";

const enum MarbleValue {
    BadMarble = -100,
    Blue = 50,
    Green = 100,
    Yellow = 150, 
    Orange = 200,
    Red = 300,
    Purple = 400,
}

export class Marble {

    private constructor(private type: MarbleValue, private imageSrc: string) {
    }

    get Type(): MarbleValue {
        return this.type;
    }

    get ImageSrc(): string {
        return this.imageSrc;
    }

    public static availableMarbles: Marble[] = [
        new Marble(MarbleValue.BadMarble, "/assets/marbles/bad-marble.png"),
        new Marble(MarbleValue.Blue, "/assets/marbles/blue.png"),
        new Marble(MarbleValue.Green, "/assets/marbles/green.png"),
        new Marble(MarbleValue.Yellow, "/assets/marbles/yellow.png"),
        new Marble(MarbleValue.Orange, "/assets/marbles/orange.png"),
        new Marble(MarbleValue.Red, "/assets/marbles/red.png"),
        new Marble(MarbleValue.Purple, "/assets/marbles/purple.png"),
    ];

    public static createMarbleGenerator() {
        return interval(1000).pipe(
            switchMap(() => {
                const randomizedIndex = Math.floor(Math.random() * Marble.availableMarbles.length);
                return of(Marble.availableMarbles[randomizedIndex]);
            }),
        );
    }
}