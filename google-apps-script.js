// Google Apps Script للربط مع Google Sheets
// الخطوات:
// 1. افتح Google Sheets جديد
// 2. اذهب إلى Extensions > Apps Script
// 3. انسخ هذا الكود والصقه
// 4. احفظ واضغط Deploy > New deployment
// 5. اختر Web app
// 6. Who has access: Anyone
// 7. انسخ الـ URL وضعه في page.tsx

function doPost(e) {
  try {
    // افتح الـ Spreadsheet (استبدل بـ ID الخاص بك)
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // إذا كانت أول مرة، أضف العناوين
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['التاريخ', 'الوقت', 'الاسم', 'الهاتف', 'البريد الإلكتروني', 'نوع الوحدة', 'الرسالة']);
    }
    
    // احصل على البيانات من الطلب
    const data = JSON.parse(e.postData.contents);
    
    // احصل على التاريخ والوقت
    const timestamp = new Date(data.timestamp);
    const date = Utilities.formatDate(timestamp, 'Africa/Cairo', 'yyyy-MM-dd');
    const time = Utilities.formatDate(timestamp, 'Africa/Cairo', 'HH:mm:ss');
    
    // أضف الصف الجديد
    sheet.appendRow([
      date,
      time,
      data.name,
      data.phone,
      data.email,
      data.unitType,
      data.message
    ]);
    
    // إرسال إشعار بالبريد الإلكتروني (اختياري)
    // استبدل بالبريد الإلكتروني الخاص بك
    const emailAddress = 'your-email@example.com';
    const subject = 'استفسار جديد من موقع Jaya Mark';
    const body = `
      استفسار جديد:
      
      الاسم: ${data.name}
      الهاتف: ${data.phone}
      البريد الإلكتروني: ${data.email}
      نوع الوحدة: ${data.unitType}
      الرسالة: ${data.message}
      
      التاريخ: ${date}
      الوقت: ${time}
    `;
    
    // قم بإلغاء التعليق لتفعيل إرسال البريد
    // MailApp.sendEmail(emailAddress, subject, body);
    
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// للاختبار
function doGet() {
  return ContentService.createTextOutput('Google Apps Script is working!');
}
