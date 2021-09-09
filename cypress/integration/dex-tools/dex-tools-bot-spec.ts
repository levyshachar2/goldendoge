import {DexToolsPage} from "../../src/dex-tools/dex-tools-page";

describe('init', () => {
        beforeEach(() => {
            DexToolsPage.openDexDogeCodeUrl();
        });

        it('Contract', () => {
            DexToolsPage.clickOnContract();
        });

        it('Coin Market', () => {
            DexToolsPage.clickOnCoinMarket();
        });

        it('Telegram', () => {
            DexToolsPage.clickOnTelegram();
        });

        it('Twitter', () => {
            DexToolsPage.clickOnTwitter();
        });

        it('Golden doge webpage', () => {
            DexToolsPage.clickOnTwitter();
        });
    }
);

