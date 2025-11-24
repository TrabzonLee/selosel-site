{\rtf1\ansi\ansicpg1252\cocoartf2867
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;\f1\froman\fcharset0 Times-Roman;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // \'d6rnek: Form submit ve Gemini API entegrasyonu\
// Sen API key'i kendi anahtar\uc0\u305 nla de\u287 i\u351 tireceksin\
const GEMINI_API_KEY = '
\f1 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 AIzaSyCDtIwfpMc0k3LKwE_lFTFpEIwIZZOmads
\f0 \kerning1\expnd0\expndtw0 \outl0\strokewidth0 ';\
\
document.addEventListener('DOMContentLoaded', function() \{\
    const form = document.querySelector('#contactForm');\
    if(form)\{\
        form.addEventListener('submit', async function(e)\{\
            e.preventDefault();\
\
            const formData = \{\
                name: form.name.value,\
                email: form.email.value,\
                phone: form.phone.value,\
                message: form.message.value,\
                type: form.type.value\
            \};\
\
            // Gemini API \'f6rnek POST iste\uc0\u287 i\
            try \{\
                const response = await fetch('https://api.gemini.openai.com/v1/your-endpoint', \{\
                    method: 'POST',\
                    headers: \{\
                        'Content-Type': 'application/json',\
                        'Authorization': `Bearer $\{GEMINI_API_KEY\}`\
                    \},\
                    body: JSON.stringify(\{\
                        prompt: `Form verisini \'f6zetle: $\{JSON.stringify(formData)\}`,\
                        max_tokens: 150\
                    \})\
                \});\
\
                const data = await response.json();\
                alert('Form g\'f6nderildi! \'d6zet: ' + data.output_text);\
                form.reset();\
            \} catch (err) \{\
                console.error(err);\
                alert('Form gonderimi sirasinda hata olustu.');\
            \}\
        \});\
    \}\
\});\
\
// Gemini API Key (
\f1 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 AIzaSyCDtIwfpMc0k3LKwE_lFTFpEIwIZZOmads
\f0 \kerning1\expnd0\expndtw0 \outl0\strokewidth0 )\
const GEMINI_API_KEY = '
\f1 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 AIzaSyCDtIwfpMc0k3LKwE_lFTFpEIwIZZOmads
\f0 \kerning1\expnd0\expndtw0 \outl0\strokewidth0 ';\
\
// Form submit event listener\
document.addEventListener('DOMContentLoaded', function() \{\
    const form = document.querySelector('#contactForm');\
\
    if(form)\{\
        form.addEventListener('submit', async function(e)\{\
            e.preventDefault();\
\
            // Form verilerini al\
            const formData = \{\
                name: form.name.value,\
                email: form.email.value,\
                phone: form.phone.value,\
                type: form.type.value,\
                message: form.message.value\
            \};\
\
            try \{\
                // Gemini API iste\uc0\u287 i\
                const response = await fetch('https://api.gemini.openai.com/v1/completions', \{\
                    method: 'POST',\
                    headers: \{\
                        'Content-Type': 'application/json',\
                        'Authorization': `Bearer $\{GEMINI_API_KEY\}`\
                    \},\
                    body: JSON.stringify(\{\
                        model: "gemini-1.5",           // Model ad\uc0\u305 \
                        prompt: `Asagidaki form verisini ozetle ve hangi hizmetle ilgili oldugunu belirt: $\{JSON.stringify(formData)\}`,\
                        max_tokens: 150\
                    \})\
                \});\
\
                const data = await response.json();\
\
                // API cevab\uc0\u305 n\u305  kullan\u305 c\u305 ya g\'f6ster\
                const summary = data.choices && data.choices[0] ? data.choices[0].text : \'91Ozet olusturulamadi.\'92;\
                alert(`Form basariyla g\'f6nderildi!\\nGemini Ozet: $\{summary\}`);\
\
                // Formu resetle\
                form.reset();\
            \} catch (err) \{\
                console.error(err);\
                alert('Form g\'f6nderimi sirasinda bir hata olustu.');\
            \}\
        \});\
    \}\
\});\
\
}