import { OverlaySettings } from '../overlaySettings';
/**
 * Class for setting up BlinkCard overlay.
 * BlinkCard overlay is best suited for scanning payment cards.
 */
export class BlinkCardOverlaySettings extends OverlaySettings {
    constructor() {
        super('BlinkCardOverlaySettings');
        this.firstSideInstructions = null;
        this.flipCardInstructions = null;
        this.showFlashlightWarning = true;
        this.errorMoveCloser = null;
        this.errorMoveFarther = null;
        this.errorCardTooCloseToEdge = null;
        this.showOnboardingInfo = true;
        this.showIntroductionDialog = true;
        this.onboardingButtonTooltipDelay = 8000;
        this.language = null;
        this.country = null;
    }
}
//# sourceMappingURL=blinkcardOverlays.js.map