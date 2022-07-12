import { google } from 'googleapis'

//> reform sheets to pull all sheets from specific spreadsheet

export async function getDataFromSheets(sheetName) {
  try {
    const target = ['https://www.googleapis.com/auth/spreadsheets.readonly']
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      null,
      (process.env.GOOGLE_SHEETS_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
      target
    )

    const sheets = google.sheets({ version: 'v4', auth: jwt })

    // const response = await sheets.spreadsheets.values.get({
    //   spreadsheetId: process.env.SPREADSHEET_ID,
    //   range: process.env.HOME_SHEET,
    // })

    // const rows = response.data.values
    // if (rows.length) {
    //   return rows.map((row) => ({
    //     timestamp: row[0],
    //     short: row[1],
    //     reason: row[2],
    //     media: row[3],
    //     link: row[4],
    //   }))
    // }

    //target sheeetName specifically
    if (sheetName === 'whyspoton') {
      //WHYSPOTON SHEET
      const whyspotonSheet = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: 'whyspoton',
      })
      const whyspoton = whyspotonSheet.data.values
      //check to see if any data returned via length property
      if (whyspoton.length) {
        return whyspoton.map((row) => ({
          timestamp: row[0],
          short: row[1],
          reason: row[2],
          media: row[3],
          link: row[4],
        }))
      }
    } else if (sheetName === 'services') {
      //SERVICES SHEET
      const servicesSheet = await sheets.spreadsheets.values.get({
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: 'services',
      })
      //get response
      const services = servicesSheet.data.values
      //check to see if data returned via length property
      if (services.length) {
        return services.map((row) => ({
          timestamp: row[0],
          name: row[1],
          short: row[2],
          category: row[3],
          long: row[4],
          media: row[5],
          link: row[6],
        }))
      }
    }
  } catch (err) {
    console.log(err)
  }

  return []
}
