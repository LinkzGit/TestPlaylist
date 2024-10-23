import test, { expect } from "@playwright/test";

test('Puedo subir archivos a Automation Sandbox', async ({ page }) => {

    await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {

        await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
    })

    await test.step ('Agrego archivos para ser subidos', async () => {

        await page.getByLabel('Upload file').setInputFiles(['pathAlArchivo.pdf', 'Invoice1.pdf', 'Invoice2.pdf']);
        await page.getByLabel('Upload file').setInputFiles([]);
    })
})

test('puedo hacer un Drag and Drop de elementos en Automation Sandbox', async ({ page }) => {

        await test.step('Dado que navego al Sandbox', async() => {
            await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
    })

    await test.step('Selecciono un dia de la semana del dropdown', async () => {

        await page.getByTestId('DragFrom').dragTo(page.getByTestId('DragTo'));
    
    })
})   

test('Puedo seleccionar y deseleccionar un checkbox en el @Sandbox', async ({ page }) => {

        await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {
            await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
        })

        await test.step('Puedo seleccionar el checkbox para Pasta', async () => {
        
            await page.getByLabel('Pasta 🍝').check();

            await expect(page.getByLabel('Pasta 🍝'), 'El Checkbox no estaba seleccionado').toBeChecked();

        })

        await test.step('Puedo deseleccionar el checkbox Pasta', async () => {
            await page.getByLabel('Pasta 🍝').uncheck();

            await expect(page.getByLabel('Pasta 🍝'), 'El checkbox estaba seleccionado').not.toBeChecked();
        })
})

test('Click en Botón ID Dinámico', async ({ page }) => {

        await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {
        await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
        
    })

        await test.step('Puedo hacer click en el botón con ID dinámico', async () => {
            const botonIDDinamico = page.getByRole('button', { name: 'Hacé click para generar un ID dinámico y mostrar el elemento oculto' });
            await botonIDDinamico.click({ force: true });
            await expect(page.getByText('OMG, aparezco después de 3 segundos de haber hecho click en el botón 👻.')).toBeVisible();
            })
});

        
// NOTAS

//const popupPromise = page.waitForEvent('popup');
//await page.getByText('open the popup').click();
//const popup = await popupPromise;
//await popup.waitForLoadState();
//console.log(await popup.title());


// DIFERENTES TIPOS DE TESTS 
//test.only (Ejecuta SOLO este test)
//test.skip (SKIPPEA)
