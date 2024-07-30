import { Recognizer, RecognizerResult } from '../recognizer';
import { Date, Issuer, BlinkCardProcessingStatus, BlinkCardAnonymizationSettings, DocumentLivenessCheckResult, BlinkCardMatchLevel, ImageExtensionFactors } from '../types';
/**
 * Result object for BlinkCardRecognizer.
 */
export declare class BlinkCardRecognizerResult extends RecognizerResult {
    /**
     * The payment card number.
     */
    cardNumber?: string;
    /**
     * The payment card number prefix.
     */
    cardNumberPrefix?: string;
    /**
     * The payment card number is valid
     */
    cardNumberValid?: boolean;
    /**
     *  Payment card's security code/value.
     */
    cvv?: string;
    /**
     * Document liveness check (screen, photocopy, hand presence) which can pass or fail.
     */
    documentLivenessCheck?: DocumentLivenessCheckResult;
    /**
     * The payment card's expiry date.
     */
    expiryDate?: Date;
    /**
     * Whether the first scanned side is anonymized.
     */
    firstSideAnonymized?: boolean;
    /**
     * Whether the first scanned side is blurred.
     */
    firstSideBlurred?: boolean;
    /**
     * Full image of the payment card from first side recognition.
     */
    firstSideFullDocumentImage?: string;
    /**
     * Payment card's IBAN.
     */
    iban?: string;
    /**
     * Payment card's issuing network.
     */
    issuer?: Issuer;
    /**
     * Information about the payment card owner (name, company, etc.).
     */
    owner?: string;
    /**
     * Status of the last recognition process.
     */
    processingStatus?: BlinkCardProcessingStatus;
    /**
     * Returns true if recognizer has finished scanning first side and is now scanning back side,
         * false if it's still scanning first side.
     */
    scanningFirstSideDone?: boolean;
    /**
     * Whether the second scanned side is anonymized.
     */
    secondSideAnonymized?: boolean;
    /**
     * Whether the second scanned side is blurred.
     */
    secondSideBlurred?: boolean;
    /**
     * Full image of the payment card from second side recognition.
     */
    secondSideFullDocumentImage?: string;
    constructor(nativeResult: any);
}
/**
 * Recognizer used for scanning credit/debit cards.
 */
export declare class BlinkCardRecognizer extends Recognizer {
    /**
     * Defines whether blured frames filtering is allowed
         *
         *
     */
    allowBlurFilter: boolean;
    /**
     * Whether invalid card number is accepted.
         *
         *
     */
    allowInvalidCardNumber: boolean;
    /**
     * Defines whether sensitive data should be redacted from the result.
         *
         *
     */
    anonymizationSettings: BlinkCardAnonymizationSettings;
    /**
     * Should extract CVV
         *
         *
     */
    extractCvv: boolean;
    /**
     * Should extract the payment card's month of expiry
         *
         *
     */
    extractExpiryDate: boolean;
    /**
     * Should extract the payment card's IBAN
         *
         *
     */
    extractIban: boolean;
    /**
     * Should extract the card owner information
         *
         *
     */
    extractOwner: boolean;
    /**
     * Property for setting DPI for full document images
         * Valid ranges are [100,400]. Setting DPI out of valid ranges throws an exception
         *
         *
     */
    fullDocumentImageDpi: number;
    /**
     * Image extension factors for full document image.
         *
         * @see CImageExtensionFactors
         *
     */
    fullDocumentImageExtensionFactors: ImageExtensionFactors;
    /**
     * This parameter is used to adjust heuristics that eliminate cases when the hand is present.
         *
         *
     */
    handDocumentOverlapThreshold: number;
    /**
     * Hand scale is calculated as a ratio between area of hand mask and document mask.
         *
         *
     */
    handScaleThreshold: number;
    /**
     * Pading is a minimum distance from the edge of the frame and is defined as a percentage of the frame width. Default value is 0.0f and in that case
         * padding edge and image edge are the same.
         * Recommended value is 0.02f.
         *
         *
     */
    paddingEdge: number;
    /**
     * Photocopy analysis match level - higher if stricter.
         *
         *
     */
    photocopyAnalysisMatchLevel: BlinkCardMatchLevel;
    /**
     * Sets whether full document image of ID card should be extracted.
         *
         *
     */
    returnFullDocumentImage: boolean;
    /**
     * Screen analysis match level - higher if stricter.
         *
         *
     */
    screenAnalysisMatchLevel: BlinkCardMatchLevel;
    constructor();
}
