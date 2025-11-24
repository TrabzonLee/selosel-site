{\rtf1\ansi\ansicpg1252\cocoartf2867
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // \'d6rnek: Form submit ve Gemini API entegrasyonu\
// Sen API key'i kendi anahtar\uc0\u305 nla de\u287 i\u351 tireceksin\
const GEMINI_API_KEY = 'YOUR_GEMINI_API_KEY_HERE';\
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
                alert('Form g\'f6nderimi s\uc0\u305 ras\u305 nda hata olu\u351 tu.');\
            \}\
        \});\
    \}\
\});\
}