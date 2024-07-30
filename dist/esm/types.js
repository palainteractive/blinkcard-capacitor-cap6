/**
 * Represents a date extracted from image.
 */
export class Date {
    constructor(nativeDate) {
        this.day = nativeDate.day;
        this.month = nativeDate.month;
        this.year = nativeDate.year;
        this.originalDateStringResult = nativeDate.originalDateStringResult;
        this.isFilledByDomainKnowledge = nativeDate.isFilledByDomainKnowledge;
    }
}
/**
 * Represents a date result with additional properties.
 */
export class DateResult {
    constructor(nativeDateResult) {
        this.date = new Date(nativeDateResult.date);
        this.originalDateStringResult = nativeDateResult.originalDateStringResult;
        this.isFilledByDomainKnowledge = nativeDateResult.isFilledByDomainKnowledge;
    }
}
/**
 * Represents a point in image
 */
export class Point {
    constructor(nativePoint) {
        this.x = nativePoint.x;
        this.y = nativePoint.y;
    }
}
/**
 * Represents a quadrilateral location in the image
 */
export class Quadrilateral {
    constructor(nativeQuad) {
        this.upperLeft = new Point(nativeQuad.upperLeft);
        this.upperRight = new Point(nativeQuad.upperRight);
        this.lowerLeft = new Point(nativeQuad.lowerLeft);
        this.lowerRight = new Point(nativeQuad.lowerRight);
    }
}
/**
 * Holds the settings which control card number anonymization.
 */
export class CardNumberAnonymizationSettings {
    constructor() {
        this.mode = 0 /* BlinkCardAnonymizationMode.None */;
        this.prefixDigitsVisible = -1;
        this.suffixDigitsVisible = -1;
    }
}
/**
 * Holds the settings which control card number anonymization.
 */
export class BlinkCardAnonymizationSettings {
    constructor() {
        this.cardNumberAnonymizationSettings = new CardNumberAnonymizationSettings();
        this.cardNumberPrefixAnonymizationMode = 0 /* BlinkCardAnonymizationMode.None */;
        this.cvvAnonymizationMode = 0 /* BlinkCardAnonymizationMode.None */;
        this.ibanAnonymizationMode = 0 /* BlinkCardAnonymizationMode.None */;
        this.ownerAnonymizationMode = 0 /* BlinkCardAnonymizationMode.None */;
    }
}
/**
 * Represents the card side for liveness checks
 */
export class BlinkCardSide {
    constructor(nativeCardSide) {
        this.handPresenceCheck = nativeCardSide.handPresenceCheck;
        this.photocopyCheck = nativeCardSide.photocopyCheck;
        this.screenCheck = nativeCardSide.screenCheck;
    }
}
/**
* Represents the result of liveness checks on both sides (front and back) of a card.
*/
export class DocumentLivenessCheckResult {
    constructor(nativeDocumentLivenessCheckResult) {
        this.front = nativeDocumentLivenessCheckResult.front != undefined ? new BlinkCardSide(nativeDocumentLivenessCheckResult.front) : undefined;
        this.back = nativeDocumentLivenessCheckResult.back != undefined ? new BlinkCardSide(nativeDocumentLivenessCheckResult.back) : undefined;
    }
}
/**
 * Extension factors relative to corresponding dimension of the full image. For example,
 * upFactor and downFactor define extensions relative to image height, e.g.
 * when upFactor is 0.5, upper image boundary will be extended for half of image's full
 * height.
 */
export class ImageExtensionFactors {
    constructor() {
        /** image extension factor relative to full image height in UP direction. */
        this.upFactor = 0.0;
        /** image extension factor relative to full image height in RIGHT direction. */
        this.rightFactor = 0.0;
        /** image extension factor relative to full image height in DOWN direction. */
        this.downFactor = 0.0;
        /** image extension factor relative to full image height in LEFT direction. */
        this.leftFactor = 0.0;
    }
}
/** Result of the data matching algorithm for scanned parts/sides of the document. */
export var DataMatchState;
(function (DataMatchState) {
    /** Data matching has not been performed. */
    DataMatchState[DataMatchState["NotPerformed"] = 0] = "NotPerformed";
    /** Data does not match. */
    DataMatchState[DataMatchState["Failed"] = 1] = "Failed";
    /** Data match. */
    DataMatchState[DataMatchState["Success"] = 2] = "Success";
})(DataMatchState || (DataMatchState = {}));
//# sourceMappingURL=types.js.map