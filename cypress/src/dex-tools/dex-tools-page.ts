
export class DexToolsPage {

    static openDexDogeCodeUrl() {
        cy.visit('/') // visits the baseUrl
    }

    static clickOnContract() {
        cy.get('a[href$="https://bscscan.com/token/0xa53e61578ff54f1ad70186be99332a6e20b6ffa9"]')
            .click();

        cy.wait(5000) // wait for networkidle

    }

    static clickOnCoinMarket() {
        cy.get('a[href$="https://coinmarketcap.com/currencies/golden-doge"]')
            .click();
        cy.wait(5000) // wait for networkidle

    }

    static clickOnTelegram() {
        //https://t.me/en_goldendoge
        cy.get('a[href$="https://t.me/en_goldendoge"]')
            .click();
        cy.wait(5000) // wait for networkidle
    }

    static clickOnTwitter() {
        //https://twitter.com/GoldenDoge11
        cy.get('a[href$="https://twitter.com/GoldenDoge11"]')
            .click();
        cy.wait(5000) // wait for networkidle
    }

    static clickOnGoldenDogeWebPage(){
        //https://goldendoge.finance/
        cy.get('a[href$="https://goldendoge.finance"]')
            .click();
        cy.wait(5000) // wait for networkidle
    }




    // private waitForResources(resources) {
    //     const globalTimeout = 20000
    //     const resourceCheckInterval = 2000
    //     const idleTimesInit = 3
    //     let idleTimes = idleTimesInit
    //     let resourcesLengthPrevious
    //     let timeout
    //
    //     return new Cypress.Promise((resolve, reject) => {
    //         const checkIfResourcesLoaded = () => {
    //             const resourcesLoaded = cy.window().then(window => {
    //             window.performance.getEntriesByType("resource")
    //                     .filter(pe => !["script", "xmlhttprequest"].includes(pe.entryType))
    //             })
    //
    //
    //             const allFilesFound = resources.every(
    //                 resource => {
    //                     const found = resourcesLoaded.filter(
    //                         resourceLoaded => {
    //                             return resourceLoaded.name.includes(resource.name)
    //                         },
    //                     )
    //                     if (found.length === 0) {
    //                         return false
    //                     }
    //                     return !resource.number || found.length >= resource.number
    //                 },
    //             )
    //
    //             if (allFilesFound) {
    //                 if (resourcesLoaded.length === resourcesLengthPrevious) {
    //                     idleTimes--
    //                 }
    //                 else {
    //                     idleTimes = idleTimesInit
    //                     resourcesLengthPrevious = resourcesLoaded.length
    //                 }
    //             }
    //             if (!idleTimes) {
    //                 resolve()
    //                 return
    //             }
    //
    //             timeout = setTimeout(checkIfResourcesLoaded, resourceCheckInterval)
    //         }
    //
    //         checkIfResourcesLoaded()
    //         setTimeout(() => {
    //             reject()
    //             clearTimeout(timeout)
    //         }, globalTimeout)
    //     })
    // }
}