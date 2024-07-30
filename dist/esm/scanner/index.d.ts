import { RecognizerCollection } from '../recognizer';
import { OverlaySettings } from '../overlaySettings';
export interface License {
    ios: string;
    android: string;
    showTrialLicenseWarning: boolean;
}
export declare enum ScanningStatus {
    cancelled = 0,
    succeeded = 1
}
export declare class BlinkCardPlugin implements BlinkCardPluginInterface {
    scanWithCamera(overlaySettings: OverlaySettings, recognizerCollection: RecognizerCollection, license: License): Promise<any>;
    scanWithDirectApi(license: License, recognizerCollection: RecognizerCollection, frontImage: string, backImage?: string): Promise<any>;
}
export interface BlinkCardPluginInterface {
    scanWithCamera(overlaySettings: OverlaySettings, recognizerCollection: RecognizerCollection, license: License): Promise<any>;
    scanWithDirectApi(license: License, recognizerCollection: RecognizerCollection, frontImage: string, backImage?: string): Promise<any>;
}
