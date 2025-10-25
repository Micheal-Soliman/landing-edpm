# دليل ربط الفورم بـ Google Sheets

## الخطوات:

### 1. إنشاء Google Sheet جديد
- اذهب إلى [Google Sheets](https://sheets.google.com)
- أنشئ ملف جديد
- سمّه "Jaya Mark - Contact Form"

### 2. فتح Apps Script
- في Google Sheet، اذهب إلى: **Extensions** > **Apps Script**
- سيفتح محرر الأكواد

### 3. نسخ الكود
- احذف أي كود موجود
- افتح ملف `google-apps-script.js`
- انسخ كل الكود والصقه في Apps Script

### 4. تعديل البريد الإلكتروني (اختياري)
```javascript
const emailAddress = 'your-email@example.com'; // ضع بريدك هنا
```
- إذا أردت استقبال إشعارات بالبريد، قم بإلغاء التعليق عن السطر:
```javascript
// MailApp.sendEmail(emailAddress, subject, body);
```
أصبح:
```javascript
MailApp.sendEmail(emailAddress, subject, body);
```

### 5. حفظ المشروع
- اضغط على أيقونة **Save** (💾)
- سمّ المشروع "Jaya Mark Contact Form"

### 6. Deploy (النشر)
1. اضغط على **Deploy** > **New deployment**
2. اضغط على أيقونة الترس ⚙️ بجانب "Select type"
3. اختر **Web app**
4. املأ البيانات:
   - **Description**: Contact Form v1
   - **Execute as**: Me
   - **Who has access**: Anyone
5. اضغط **Deploy**
6. قد يطلب منك الموافقة على الأذونات - اضغط **Authorize access**
7. اختر حسابك في Google
8. اضغط **Advanced** > **Go to [Project Name] (unsafe)**
9. اضغط **Allow**

### 7. نسخ الـ URL
- بعد Deploy، ستحصل على **Web app URL**
- انسخ هذا الرابط (يبدأ بـ `https://script.google.com/...`)

### 8. وضع الـ URL في الكود
- افتح ملف `app/page.tsx`
- ابحث عن السطر:
```javascript
const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
```
- استبدله بـ:
```javascript
const GOOGLE_SCRIPT_URL = 'الرابط الذي نسخته';
```

### 9. اختبار الفورم
- احفظ التغييرات
- افتح الموقع
- املأ الفورم واضغط إرسال
- تحقق من Google Sheet - يجب أن تظهر البيانات

## هيكل البيانات في Google Sheet:

| التاريخ | الوقت | الاسم | الهاتف | البريد الإلكتروني | نوع الوحدة | الرسالة |
|---------|-------|-------|---------|-------------------|------------|---------|
| 2024-10-25 | 21:30:00 | أحمد محمد | 01234567890 | ahmed@example.com | تجاري | أريد الاستفسار... |

## ملاحظات مهمة:

1. **الأمان**: الـ URL عام، لكن البيانات تُحفظ في حسابك فقط
2. **الحد الأقصى**: Google Apps Script يسمح بـ 20,000 طلب يومياً (أكثر من كافي)
3. **التحديث**: إذا عدّلت الكود، اعمل **Deploy** > **Manage deployments** > **Edit** > **Version: New version**
4. **البريد الإلكتروني**: لتفعيل الإشعارات، تأكد من إلغاء التعليق عن `MailApp.sendEmail`

## استكشاف الأخطاء:

### إذا لم تصل البيانات:
1. تحقق من الـ URL في `page.tsx`
2. افتح Console في المتصفح (F12) وابحث عن أخطاء
3. في Apps Script، اذهب إلى **Executions** لرؤية السجلات

### إذا ظهرت رسالة خطأ:
1. تأكد من أن "Who has access" مضبوط على **Anyone**
2. تأكد من الموافقة على جميع الأذونات
3. جرّب إعادة Deploy

## دعم:
إذا واجهت أي مشكلة، تحقق من:
- [Google Apps Script Documentation](https://developers.google.com/apps-script)
- Console في المتصفح للأخطاء
