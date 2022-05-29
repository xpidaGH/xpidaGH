# English

# Learners Templates: Templates of this website in twenty Languages - English, Arabic, Bengali, Chinese, Dutch, French, German, Hindi, Indonesian, Italian, Japanese, Marathi, Portuguese, Russian, Spanish, Swahili, Tamil, Telugu, Turkish, Urdu.

# The objective is to build a number of Mobile, Desktop and Web Apps with ReactJS, React Native and Python. This WebApp uses Django and React with typescript and Tailwind CSS. It will include:

# A Portfolio Application

# A Notes Application

# A To-do Application

# A CommerceJS Application

# A Weather Application

# A Customer Relations Management Application

# Important sections and components will include:

# Social login

# Comment section

# EmailJS

# PayPal and Stripe integrations

# Internationalization

# Tools Used

Frontend: ReactJS, TailwindCSS, Typescript
Backend: Django, Django REST Framework

# Code Usage

- unzip the template
- or
- Clone the repository
- Create your environment
- Then activate your environment

```shell
      python -m venv env
```

```shell
      source env/bin/activate
```

- Navigate to the [project1] base folder that contains the requirements.txt file.
- Then install all requirements

```shell
       cd project1
```

```shell
      pip install -r requirements.txt
```

- Make migrations
- Then migrate changes

```shell
       python3 manage.py makemigrations
```

```shell
       python3 manage.py migrate
```

- Navigate to the front end folder
- Then install npm

```shell
       cd frontend
```

```shell
      npm install
```

- Build the files
- Then navigate back to the root directory

```shell
      npm run build
```

```shell
       cd ..
```

- Run the command below to run the code in development mode
- Then open [http://127.0.0.1:8000/](http://127.0.0.1:8000/) to view and test the application in the browser.

```shell
       python manage.py runserver
```

# EmailJS

[https://dashboard.emailjs.com/sign-up]:
Send emails using client-side technologies only. No server required. First, use the link above to create a free account and get your own data to replace the following:
'SERVICE ID', 'TEMPLATE ID', 'User ID'

# project1\frontend\src\general\ContactUs.tsx

emailjs
.sendForm(
"service_v9n4dyx",
"template_bfro6dg",
form.current,
"kNN4y37J6-A9XlG31"

# Commerce.js

To ensure you have some product data to work with, we provided a demo merchant public key.
[https://dashboard.chec.io/signup]
You will first need to create an account to get your API credentials. Sign up for an account using the link above. Navigate to the developer section under settings as shown below to obtain your generated public and secret keys. Replace the demo public key with your own in the file [.env].
[https://dashboard.chec.io/settings/developer]

# project1\frontend\.env

REACT_APP_CHEC_PUBLIC_KEY=pk_184625ed86f36703d7d233bcf6d519a4f9398f20048ec

# Supabase Comments Extension

[https://app.supabase.io/]
Go to the link above and make a database - it is simple and takes a few minutes. Then add a few tables with the command below which include your connection string as the last part. You can find your connection string on the dashboard:
[https://app.supabase.io/project/PUT-YOUR-PROJECT-ID-HERE/settings/database]

npx supabase-comments-extension run-migrations <postgres://postgres:some-made-up-password@db.ddziybrgjepxqpsflsiv.supabase.co:5432/postgres

# PayPal

[https://paypal.com/]
First, go to the link above to create a PayPal account. Once done, head to the PayPal developer screen below to get your credentials - your clientId. Your sandbox account will be an email address that you can use to make test payments while your client ID is what PayPal uses to connect your Application to your PayPal account. Replace with your own.
[https://developer.paypal.com/developer/applications/]

# project1\frontend\src\paypalPayment\constants\clientID.ts

export const PAYPAL_CLIENT_ID = {
clientId:
"ARKjojd867g46kvryMoHyd3-Amteqpbuhtxw6WyP6EF0oW2HlKheCc9uFq_gKhaTYn9pJ77rMqlXsjEb",
};

# Arabic ar

# الهدف هو بناء عدد من تطبيقات الجوال وسطح المكتب والويب باستخدام ReactJS و React Native و Python. يستخدم تطبيق الويب هذا Django و React مع typescript و Tailwind CSS. وسوف تشمل ما يلي:

# تطبيق محفظة

# تطبيق ملاحظات

# تطبيق المهام

# تطبيق CommerceJS

# تطبيق الطقس

# تطبيق إدارة علاقات العملاء

# ستشمل الأقسام والمكونات المهمة ما يلي:

# تسجيل الدخول الاجتماعي

# قسم التعليقات

# البريد الإلكترونيJS

# PayPal وتكامل الشريط

# التدويل

# الأدوات المستخدمة

الواجهة الأمامية: ReactJS ، TailwindCSS ، Typescript
الواجهة الخلفية: جانغو، جانغو REST الإطار

# استخدام الرمز

- فك ضغط القالب
- أو
- استنساخ المستودع
- خلق البيئة الخاصة بك
- ثم تفعيل البيئة الخاصة بك

```shell
      python -m venv env
```

```shell
      source env/bin/activate
```

- انتقل إلى المجلد الأساسي [project1] الذي يحتوي على ملف .txt المتطلبات.
- ثم تثبيت جميع المتطلبات

```shell
       cd project1
```

```shell
      pip install -r requirements.txt
```

- جعل الهجرات
- ثم ترحيل التغييرات

```shell
       python3 manage.py makemigrations
```

```shell
       python3 manage.py migrate
```

- انتقل إلى مجلد الواجهة الأمامية
- ثم تثبيت npm

```shell
       cd frontend
```

```shell
      npm install
```

- بناء الملفات
- ثم انتقل مرة أخرى إلى الدليل الجذر

```shell
      npm run build
```

```shell
       cd ..
```

- قم بتشغيل الأمر أدناه لتشغيل الكود في وضع التطوير
- ثم افتح [http://127.0.0.1:8000/] (http://127.0.0.1:8000/) لعرض واختبار التطبيق في المتصفح

```shell
       python manage.py runserver
```

# EmailJS

[https://dashboard.emailjs.com/sign-up]:
إرسال رسائل البريد الإلكتروني باستخدام التقنيات من جانب العميل فقط. لا يوجد خادم مطلوب. أولا ، استخدم الرابط أعلاه لإنشاء حساب مجاني والحصول على بياناتك الخاصة لتحل محل ما يلي: 'SERVICE ID', 'TEMPLATE ID', 'User ID'

# project1\frontend\src\general\ContactUs.tsx

emailjs
.sendForm(
"service_v9n4dyx",
"template_bfro6dg",
form.current,
"kNN4y37J6-A9XlG31"

# Commerce.js

لضمان وجود بعض بيانات المنتج للعمل معنا، قدمنا مفتاح تجاري تجاري التجريبي.
[https://dashboard.chec.io/signup]
ستحتاج أولا إلى إنشاء حساب للحصول على بيانات اعتماد واجهة برمجة التطبيقات الخاصة بك. قم بالتسجيل للحصول على حساب باستخدام الرابط أعلاه. انتقل إلى قسم مطوري البرامج ضمن الإعدادات كما هو موضح أدناه للحصول على المفاتيح العامة والسرية التي تم إنشاؤها. استبدل المفتاح العام التجريبي بالمفتاح الخاص بك في الملف [.env].
[https://dashboard.chec.io/settings/developer]

# project1\frontend\.env

REACT_APP_CHEC_PUBLIC_KEY=pk_184625ed86f36703d7d233bcf6d519a4f9398f20048ec

# Supabase Comments Extension

[https://app.supabase.io/]
انتقل إلى الرابط أعلاه وقم بإنشاء قاعدة بيانات - إنها بسيطة وتستغرق بضع دقائق. ثم أضف بعض الجداول مع الأمر أدناه والتي تتضمن سلسلة الاتصال الخاصة بك كجزء أخير. يمكنك العثور على سلسلة الاتصال الخاصة بك على لوحة المعلومات: [https://app.supabase.io/project/PUT-YOUR-PROJECT-ID-HERE/settings/database]

npx supabase-comments-extension run-migrations <postgres://postgres:some-made-up-password@db.ddziybrgjepxqpsflsiv.supabase.co:5432/postgres

# PayPal

[https://paypal.com/]
أولا ، انتقل إلى الرابط أعلاه لإنشاء حساب PayPal. بمجرد الانتهاء من ذلك ، توجه إلى شاشة مطور PayPal أدناه للحصول على بيانات الاعتماد الخاصة بك - clientId الخاص بك. سيكون حساب وضع الحماية الخاص بك عنوان بريد إلكتروني يمكنك استخدامه لإجراء دفعات تجريبية بينما يكون معرف العميل الخاص بك هو ما يستخدمه PayPal لتوصيل تطبيقك بحسابك PayPal. استبدلها ببنفسك [https://developer.paypal.com/developer/applications/]

# project1\frontend\src\paypalPayment\constants\clientID.ts

export const PAYPAL_CLIENT_ID = {
clientId:
"ARKjojd867g46kvryMoHyd3-Amteqpbuhtxw6WyP6EF0oW2HlKheCc9uFq_gKhaTYn9pJ77rMqlXsjEb",
};

# Bengali bn

# এর উদ্দেশ্য হল ReactJS, React Native এবং Python এর সাথে বেশ কয়েকটি মোবাইল, ডেস্কটপ এবং ওয়েব অ্যাপস তৈরি করা। এই ওয়েবঅ্যাপটি টাইপস্ক্রিপ্ট এবং টেইলউইন্ড সিএসএস সহ Django এবং React ব্যবহার করে। এর মধ্যে অন্তর্ভুক্ত থাকবে:

# একটি পোর্টফোলিও অ্যাপ্লিকেশন

# একটি নোট অ্যাপ্লিকেশন

# একটি টু-ডু অ্যাপ্লিকেশন

# একটি কমার্সজেএস অ্যাপ্লিকেশন

# একটি আবহাওয়া অ্যাপ্লিকেশন

# একটি গ্রাহক সম্পর্ক ব্যবস্থাপনা অ্যাপ্লিকেশন

# গুরুত্বপূর্ণ বিভাগ এবং উপাদানগুলির মধ্যে অন্তর্ভুক্ত থাকবে:

# সামাজিক লগইন

# মন্তব্য বিভাগ

# EmailJS

# PayPal এবং স্ট্রাইপ ইন্টিগ্রেশন

# আন্তর্জাতিকীকরণ

# টুলস ব্যবহৃত

ফ্রন্টএন্ড: ReactJS, TailwindCSS, Typescript
ব্যাকএন্ড: Django, Django REST Framework

# কোড ব্যবহার

- টেমপ্লেটটি আনজিপ করুন
  অথবা
- ক্লোন দ্য রিপোজিটরি
  আপনার পরিবেশ তৈরি করুন
- তারপর আপনার পরিবেশ সক্রিয় করুন

```shell
      python -m venv env
```

```shell
      source env/bin/activate
```

- [project1] বেস ফোল্ডারে নেভিগেট করুন যা প্রয়োজনীয়তা.txt ফাইল ধারণ করে।
- তারপরে সমস্ত প্রয়োজনীয়তা ইনস্টল করুন

```shell
       cd project1
```

```shell
      pip install -r requirements.txt
```

- মাইগ্রেশন করুন
- তারপরে পরিবর্তনগুলি মাইগ্রেট করুন

```shell
       python3 manage.py makemigrations
```

```shell
       python3 manage.py migrate
```

- ফ্রন্ট এন্ড ফোল্ডারে নেভিগেট করুন
- তারপর npm ইনস্টল করুন

```shell
       cd frontend
```

```shell
      npm install
```

- ফাইলগুলি তৈরি করুন
- তারপরে রুট ডিরেক্টরিতে ফিরে যান

```shell
      npm run build
```

```shell
       cd ..
```

- ডেভেলপমেন্ট মোডে কোডটি চালানোর জন্য নীচের কমান্ডটি চালান
- তারপরে ব্রাউজারে অ্যাপ্লিকেশনটি দেখতে এবং পরীক্ষা করতে [http://127.0.0.1:8000/] (http://127.0.0.1:8000/) খুলুন।

```shell
       python manage.py runserver
```

# EmailJS

[https://dashboard.emailjs.com/sign-up]:
শুধুমাত্র ক্লায়েন্ট-সাইড প্রযুক্তি ব্যবহার করে ইমেলগুলি পাঠান। কোনও সার্ভারের প্রয়োজন নেই। প্রথমত, একটি বিনামূল্যে অ্যাকাউন্ট তৈরি করতে উপরের লিঙ্কটি ব্যবহার করুন এবং নিম্নলিখিতগুলি প্রতিস্থাপন করার জন্য আপনার নিজের ডেটা পান: 'SERVICE ID', 'TEMPLATE ID', 'User ID'

# project1\frontend\src\general\ContactUs.tsx

emailjs
.sendForm(
"service_v9n4dyx",
"template_bfro6dg",
form.current,
"kNN4y37J6-A9XlG31"

# Commerce.js

আপনার সাথে কিছু পণ্য ডেটা নিশ্চিত করার জন্য, আমরা একটি ডেমো বণিক পাবলিক কী প্রদান করেছি.
[https://dashboard.chec.io/signup]
আপনার এপিআই শংসাপত্রগুলি পেতে আপনাকে প্রথমে একটি অ্যাকাউন্ট তৈরি করতে হবে। উপরের লিঙ্কটি ব্যবহার করে একটি অ্যাকাউন্টের জন্য সাইন আপ করুন। আপনার উত্পন্ন সর্বজনীন এবং গোপন কীগুলি পেতে নীচে যেমন দেখানো হয়েছে সেভাবে সেটিংসের অধীনে বিকাশকারী বিভাগে নেভিগেট করুন। ডেমো সর্বজনীন কীটি ফাইলে আপনার নিজের সাথে প্রতিস্থাপন করুন [.env].
[https://dashboard.chec.io/settings/developer]

# project1\frontend\.env

REACT_APP_CHEC_PUBLIC_KEY=pk_184625ed86f36703d7d233bcf6d519a4f9398f20048ec

# Supabase Comments Extension

[https://app.supabase.io/]
উপরের লিঙ্কে যান এবং একটি ডাটাবেস তৈরি করুন - এটি সহজ এবং কয়েক মিনিট সময় নেয়। তারপরে নীচের কমান্ডের সাথে কয়েকটি টেবিল যুক্ত করুন যার মধ্যে আপনার সংযোগ স্ট্রিংটি শেষ অংশ হিসাবে অন্তর্ভুক্ত রয়েছে। আপনি ড্যাশবোর্ডে আপনার সংযোগ স্ট্রিং খুঁজে পেতে পারেন: [https://app.supabase.io/project/PUT-YOUR-PROJECT-ID-HERE/settings/database]

npx supabase-comments-extension run-migrations <postgres://postgres:some-made-up-password@db.ddziybrgjepxqpsflsiv.supabase.co:5432/postgres

# PayPal

[https://paypal.com/]
প্রথমত, একটি PayPal অ্যাকাউন্ট তৈরি করতে উপরের লিঙ্কে যান। একবার সম্পন্ন হয়ে গেলে, আপনার শংসাপত্রগুলি পেতে নীচের PayPal বিকাশকারী স্ক্রিনে যান - আপনার ক্লায়েন্টআইডি। আপনার স্যান্ডবক্স অ্যাকাউন্টটি একটি ইমেল ঠিকানা হবে যা আপনি পরীক্ষা প্রদান করতে ব্যবহার করতে পারেন যখন আপনার ক্লায়েন্ট আইডিটি আপনার PayPal অ্যাকাউন্টে আপনার অ্যাপ্লিকেশনটি সংযোগ করতে PayPal ব্যবহার করে। আপনার নিজের সাথে প্রতিস্থাপন করুন। [https://developer.paypal.com/developer/applications/]

# project1\frontend\src\paypalPayment\constants\clientID.ts

export const PAYPAL_CLIENT_ID = {
clientId:
"ARKjojd867g46kvryMoHyd3-Amteqpbuhtxw6WyP6EF0oW2HlKheCc9uFq_gKhaTYn9pJ77rMqlXsjEb",
};

# Chinese zh

# 目标是使用 ReactJS，React Native 和 Python 构建许多移动，桌面和 Web 应用程序。这个 WebApp 使用 Django 和 React 以及 typescript 和 Tailwind CSS。它将包括：

# 投资组合应用程序

# 笔记应用

# 待办事项应用程序

# 商务 JS 应用程序

# 天气应用

# 客户关系管理应用程序

# 重要部分和组件将包括：

# 社交登录

# 评论部分

# 电子邮件

# PayPal 和条带集成

# 国际化

# 使用的工具

前端：ReactJS，TailwindCSS，Typescript
后端：Django，Django REST Framework

# 代码用法

- 解压缩模板
- 或
- 克隆存储库
- 创建您的环境
- 然后激活您的环境

```shell
      python -m venv env
```

```shell
      source env/bin/activate
```

- 导航到包含要求.txt 文件的 [project1] 基文件夹。
- 然后安装所有要求

```shell
       cd project1
```

```shell
      pip install -r requirements.txt
```

- 进行迁移
- 然后迁移更改

```shell
       python3 manage.py makemigrations
```

```shell
       python3 manage.py migrate
```

- 导航到前端文件夹
- 然后安装 npm

```shell
       cd frontend
```

```shell
      npm install
```

- 构建文件
- 然后导航回根目录

```shell
      npm run build
```

```shell
       cd ..
```

- 运行以下命令以在开发模式下运行代码
- 然后打开[http://127.0.0.1:8000/]（http://127.0.0.1:8000/）以在浏览器中查看和测试应用程序

```shell
       python manage.py runserver
```

# EmailJS

[https://dashboard.emailjs.com/sign-up]:
仅使用客户端技术发送电子邮件。无需服务器。首先，使用上面的链接创建一个免费帐户，并获取自己的数据以替换以下内容： 'SERVICE ID', 'TEMPLATE ID', 'User ID'

# project1\frontend\src\general\ContactUs.tsx

emailjs
.sendForm(
"service_v9n4dyx",
"template_bfro6dg",
form.current,
"kNN4y37J6-A9XlG31"

# Commerce.js

为了确保您有一些产品数据与我们一起工作，我们提供了一个演示商家公钥.
[https://dashboard.chec.io/signup]
您首先需要创建一个帐户来获取 API 凭证。使用上面的链接注册一个帐户。导航到“设置”下的“开发人员”部分，如下所示，以获取生成的公钥和密钥。在文件中将演示公钥替换为您自己的公钥[.env].
[https://dashboard.chec.io/settings/developer]

# project1\frontend\.env

REACT_APP_CHEC_PUBLIC_KEY=pk_184625ed86f36703d7d233bcf6d519a4f9398f20048ec

# Supabase Comments Extension

[https://app.supabase.io/]
转到上面的链接并创建一个数据库 - 它很简单，需要几分钟。然后使用以下命令添加几个表，其中包含连接字符串作为最后一部分。可以在仪表板上找到连接字符串：[https://app.supabase.io/project/PUT-YOUR-PROJECT-ID-HERE/settings/database]

npx supabase-comments-extension run-migrations <postgres://postgres:some-made-up-password@db.ddziybrgjepxqpsflsiv.supabase.co:5432/postgres

# PayPal

[https://paypal.com/]
首先，转到上面的链接以创建 PayPal 帐户。完成后，转到下面的 PayPal 开发人员屏幕以获取您的凭据 - 您的客户 Id。您的沙盒帐户将是一个电子邮件地址，可用于进行测试付款，而您的客户 ID 是 PayPal 用于将您的应用程序连接到 PayPal 帐户的 ID。替换为您自己的[https://developer.paypal.com/developer/applications/]

# project1\frontend\src\paypalPayment\constants\clientID.ts

export const PAYPAL_CLIENT_ID = {
clientId:
"ARKjojd867g46kvryMoHyd3-Amteqpbuhtxw6WyP6EF0oW2HlKheCc9uFq_gKhaTYn9pJ77rMqlXsjEb",
};

# Dutch nl

# Het doel is om een aantal Mobile, Desktop en Web Apps te bouwen met ReactJS, React Native en Python. Deze WebApp maakt gebruik van Django en React met typescript en Tailwind CSS. Het omvat:

# Een portfoliotoepassing

# Een Notes Applicatie

# Een to-do applicatie

# Een CommerceJS Applicatie

# Een weer applicatie

# Een Customer Relations Management Applicatie

# Belangrijke secties en componenten zijn onder andere:

# Sociaal inloggen

# Commentaar sectie

# EmailJS

# PayPal en Stripe integraties

# Internationalisering

# Gebruikte tools

Frontend: ReactJS, TailwindCSS, Typescript
Backend: Django, Django REST Framework

# Code gebruik

- pak de sjabloon uit
- of
- Kloon de repository
- Creëer je omgeving
- Activeer vervolgens je omgeving

```shell
      python -m venv env
```

```shell
      source env/bin/activate
```

- Navigeer naar de basismap [project1] die de vereisten bevat.txt bestand.
- Installeer vervolgens alle vereisten

```shell
       cd project1
```

```shell
      pip install -r requirements.txt
```

- Migraties maken
- Vervolgens wijzigingen migreren

```shell
       python3 manage.py makemigrations
```

```shell
       python3 manage.py migrate
```

- Navigeer naar de front-end map
- Installeer vervolgens npm

```shell
       cd frontend
```

```shell
      npm install
```

- Bouw de bestanden
- Navigeer vervolgens terug naar de hoofdmap

```shell
      npm run build
```

```shell
       cd ..
```

- Voer de onderstaande opdracht uit om de code in de ontwikkelingsmodus uit te voeren
- Open vervolgens [http://127.0.0.1:8000/](http://127.0.0.1:8000/) om de applicatie in de browser te bekijken en te testen

```shell
       python manage.py runserver
```

# EmailJS

[https://dashboard.emailjs.com/sign-up]:
Verzend alleen e-mails met behulp van client-side technologieën. Geen server nodig. Gebruik eerst de bovenstaande link om een gratis account aan te maken en uw eigen gegevens te krijgen om het volgende te vervangen: 'SERVICE ID', 'TEMPLATE ID', 'User ID'

# project1\frontend\src\general\ContactUs.tsx

emailjs
.sendForm(
"service_v9n4dyx",
"template_bfro6dg",
form.current,
"kNN4y37J6-A9XlG31"

# Commerce.js

Om ervoor te zorgen dat u een aantal gegevens hebben om mee te werken, hebben wij een Demo Merchant Public Key.
[https://dashboard.chec.io/signup]
U moet eerst een account maken om uw API-referenties te krijgen. Meld u aan voor een account via de bovenstaande link. Navigeer naar het ontwikkelaarsgedeelte onder instellingen zoals hieronder weergegeven om uw gegenereerde openbare en geheime sleutels te verkrijgen. Vervang de openbare demosleutel door uw eigen sleutel in het bestand [.env].
[https://dashboard.chec.io/settings/developer]

# project1\frontend\.env

REACT_APP_CHEC_PUBLIC_KEY=pk_184625ed86f36703d7d233bcf6d519a4f9398f20048ec

# Supabase Comments Extension

[https://app.supabase.io/]
Ga naar de bovenstaande link en maak een database - het is eenvoudig en duurt een paar minuten. Voeg vervolgens een paar tabellen toe met de onderstaande opdracht die uw verbindingsreeks als laatste deel bevatten. U vindt uw verbindingsreeks op het dashboard: [https://app.supabase.io/project/PUT-YOUR-PROJECT-ID-HERE/settings/database]

npx supabase-comments-extension run-migrations <postgres://postgres:some-made-up-password@db.ddziybrgjepxqpsflsiv.supabase.co:5432/postgres

# PayPal

[https://paypal.com/]
Ga eerst naar de bovenstaande link om een PayPal account aan te maken. Als u klaar bent, gaat u naar het PayPal ontwikkelaarsscherm hieronder om uw inloggegevens te krijgen - uw clientId. Uw sandbox-account is een e-mailadres dat u kunt gebruiken om testbetalingen uit te voeren, terwijl uw client-ID is wat PayPal gebruikt om uw Toepassing te koppelen aan uw PayPal-account. Vervang door je eigen [https://developer.paypal.com/developer/applications/]

# project1\frontend\src\paypalPayment\constants\clientID.ts

export const PAYPAL_CLIENT_ID = {
clientId:
"ARKjojd867g46kvryMoHyd3-Amteqpbuhtxw6WyP6EF0oW2HlKheCc9uFq_gKhaTYn9pJ77rMqlXsjEb",
};

# French fr

# L’objectif est de créer un certain nombre d’applications mobiles, de bureau et Web avec ReactJS, React Native et Python. Cette WebApp utilise Django et React avec typescript et Tailwind CSS. Il comprendra :

# Une demande de portefeuille

# Une application Notes

# Une application à faire

# Une application CommerceJS

# Une application météo

# Une application de gestion de la relation client

# Les sections et composants importants incluront :

# Connexion sociale

# Section des commentaires

# EmailJS

# intégrations PayPal et Stripe

# Internationalisation

# Outils utilisés

Frontend: ReactJS, TailwindCSS, Typescript
Backend: Django, Django REST Framework

# Utilisation du code

- décompresser le modèle
- ou
- Cloner le référentiel
- Créez votre environnement
- Ensuite, activez votre environnement

```shell
      python -m venv env
```

```shell
      source env/bin/activate
```

- Accédez au dossier de base [project1] qui contient le fichier requirements.txt.
- Ensuite, installez toutes les exigences

```shell
       cd project1
```

```shell
      pip install -r requirements.txt
```

- Effectuer des migrations
- Puis migrer les modifications

```shell
       python3 manage.py makemigrations
```

```shell
       python3 manage.py migrate
```

- Accédez au dossier frontal
- Puis installez npm

```shell
       cd frontend
```

```shell
      npm install
```

- Construire les fichiers
- Revenez ensuite au répertoire racine

```shell
      npm run build
```

```shell
       cd ..
```

- Exécutez la commande ci-dessous pour exécuter le code en mode développement
- Ouvrez ensuite [http://127.0.0.1:8000/](http://127.0.0.1:8000/) pour afficher et tester l’application dans le navigateur

```shell
       python manage.py runserver
```

# EmailJS

[https://dashboard.emailjs.com/sign-up]:
Envoyez des e-mails en utilisant uniquement des technologies côté client. Aucun serveur requis. Tout d’abord, utilisez le lien ci-dessus pour créer un compte gratuit et obtenir vos propres données pour remplacer les éléments suivants: 'SERVICE ID', 'TEMPLATE ID', 'User ID'

# project1\frontend\src\general\ContactUs.tsx

emailjs
.sendForm(
"service_v9n4dyx",
"template_bfro6dg",
form.current,
"kNN4y37J6-A9XlG31"

# Commerce.js

Pour vous assurer que vous avez des données sur le produit pour travailler, nous avons fourni une clé de démonstration de démonstration.
[https://dashboard.chec.io/signup]
Vous devrez d’abord créer un compte pour obtenir vos informations d’identification API. Créez un compte en utilisant le lien ci-dessus. Accédez à la section développeur sous les paramètres indiqués ci-dessous pour obtenir vos clés publiques et secrètes générées. Remplacez la clé publique de démonstration par la vôtre dans le fichier [.env].
[https://dashboard.chec.io/settings/developer]

# project1\frontend\.env

REACT_APP_CHEC_PUBLIC_KEY=pk_184625ed86f36703d7d233bcf6d519a4f9398f20048ec

# Supabase Comments Extension

[https://app.supabase.io/]
Allez sur le lien ci-dessus et créez une base de données - c’est simple et prend quelques minutes. Ajoutez ensuite quelques tables avec la commande ci-dessous qui incluent votre chaîne de connexion comme dernière partie. Vous pouvez trouver votre chaîne de connexion sur le tableau de bord : [https://app.supabase.io/project/PUT-YOUR-PROJECT-ID-HERE/settings/database]

npx supabase-comments-extension run-migrations <postgres://postgres:some-made-up-password@db.ddziybrgjepxqpsflsiv.supabase.co:5432/postgres

# PayPal

[https://paypal.com/]
Tout d’abord, allez sur le lien ci-dessus pour créer un compte PayPal. Une fois cela fait, dirigez-vous vers l’écran PayPal développeur ci-dessous pour obtenir vos informations d’identification - votre clientId. Votre compte sandbox sera une adresse e-mail que vous pourrez utiliser pour effectuer des paiements de test, tandis que votre ID client est ce que PayPal utilise pour connecter votre Application à votre compte PayPal. Remplacez par le vôtre [https://developer.paypal.com/developer/applications/]

# project1\frontend\src\paypalPayment\constants\clientID.ts

export const PAYPAL_CLIENT_ID = {
clientId:
"ARKjojd867g46kvryMoHyd3-Amteqpbuhtxw6WyP6EF0oW2HlKheCc9uFq_gKhaTYn9pJ77rMqlXsjEb",
};

# German de

# Ziel ist es, eine Reihe von Mobil-, Desktop- und Web Apps mit ReaktyS zu erstellen, ein Natives und Python zu reagieren. Dieser WEBAP verwendet Django und reagiert mit Todescript und TailWind CSS. Es wird Folgendes gebucht werden:

# Eine Portfolio-Anwendung

# Eine Notes-Anwendung

# Eine To-Do-Anwendung

# Eine CommerceJS-Anwendung

# Eine Wetteranwendung

# Eine Customer Relations Management-Anwendung

# Wichtige Abschnitte und Komponenten umfassen:

# Social Login

# Kommentarbereich

# E-MailJS

# PayPal und Stripe Integrationen

# Internationalisierung

# Verwendete Tools

Frontend: ReactJS, TailwindCSS, Typescript
Backend: Django, Django REST Framework

# Code-Verwendung

- Entpacken Sie die Vorlage
- oder
- Klonen Sie das Repository
- Erstellen Sie Ihre Umgebung
- Aktivieren Sie dann Ihre Umgebung

```shell
      python -m venv env
```

```shell
      source env/bin/activate
```

- Navigieren Sie zum [project1]-Basisordner, der die Datei requirements.txt enthält.
- Installieren Sie dann alle Anforderungen

```shell
       cd project1
```

```shell
      pip install -r requirements.txt
```

- Durchführen von Migrationen
- Dann migrieren Sie Änderungen

```shell
       python3 manage.py makemigrations
```

```shell
       python3 manage.py migrate
```

- Navigieren zum Front-End-Ordner
- Dann installiere npm

```shell
       cd frontend
```

```shell
      npm install
```

- Erstellen der Dateien
- Navigieren Sie dann zurück zum Stammverzeichnis

```shell
      npm run build
```

```shell
       cd ..
```

- Führen Sie den folgenden Befehl aus, um den Code im Entwicklungsmodus auszuführen
- Öffnen Sie dann [http://127.0.0.1:8000/](http://127.0.0.1:8000/), um die Anwendung im Browser anzuzeigen und zu testen

```shell
       python manage.py runserver
```

# EmailJS

[https://dashboard.emailjs.com/sign-up]:
Senden Sie nur E-Mails mit nur Client-Side-Technologien. Kein Server erforderlich. Wählen Sie zuerst den Link oben, um ein kostenloses Konto zu erstellen und Ihre eigenen Daten zu ersetzen, um Folgendes zu ersetzen:
'SERVICE ID', 'TEMPLATE ID', 'User ID'

# project1\frontend\src\general\ContactUs.tsx

emailjs
.sendForm(
"service_v9n4dyx",
"template_bfro6dg",
form.current,
"kNN4y37J6-A9XlG31"

# Commerce.js

Um sicherzustellen, dass Sie einige Produktdaten zu arbeiten möchten, haben wir einen Demo-Handelskreis.
[https://dashboard.chec.io/signup]
Sie müssen zuerst ein Konto erstellen, um Ihre API-Anmeldeinformationen zu erhalten. Melden Sie sich über den obigen Link für ein Konto an. Navigieren Sie zum Entwicklerbereich unter Einstellungen, wie unten gezeigt, um Ihre generierten öffentlichen und geheimen Schlüssel zu erhalten. Ersetzen Sie den öffentlichen Demoschlüssel durch Ihren eigenen in der Datei [.env].
[https://dashboard.chec.io/settings/developer]

# project1\frontend\.env

REACT_APP_CHEC_PUBLIC_KEY=pk_184625ed86f36703d7d233bcf6d519a4f9398f20048ec

# Supabase Comments Extension

[https://app.supabase.io/]
Gehe zum Link oben und mache eine Datenbank - es ist einfach und dauert ein paar Minuten. Fügen Sie dann ein paar Tabellen mit dem Befehl hinzu, das in der Verbindung zum Stand der Technik eine Verbindungstrange enthält. Sie finden Ihre Verbindungstring auf dem Dashboard:
[https://app.supabase.io/project/PUT-YOUR-PROJECT-ID-HERE/settings/database]

npx supabase-comments-extension run-migrations <postgres://postgres:some-made-up-password@db.ddziybrgjepxqpsflsiv.supabase.co:5432/postgres

# PayPal

[https://paypal.com/]
Geben Sie zuerst auf den obigen Link, um ein PayPal-Konto zu erstellen. Sobald Sie fertig sind, fahren Sie unten auf den PayPal Developer-Bildschirm, um Ihre Anmeldeinformationen zu erhalten - Ihr ClientID. Ihr Sandbox-Konto wird eine E-Mail-Adresse sein, die Sie verwenden können, um Testzahlungen zu erstellen, während Ihre Client-ID der PayPal verwendet, um Ihre Anwendung an Ihr PayPal-Konto anzuschließen. Ersetzen Sie sich mit Ihrem eigenen. [https://developer.paypal.com/developer/applications/]

# project1\frontend\src\paypalPayment\constants\clientID.ts

export const PAYPAL_CLIENT_ID = {
clientId:
"ARKjojd867g46kvryMoHyd3-Amteqpbuhtxw6WyP6EF0oW2HlKheCc9uFq_gKhaTYn9pJ77rMqlXsjEb",
};

# Hindi hi

# इसका उद्देश्य कई मोबाइल, डेस्कटॉप और वेब ऐप्स को रिएक्ट्स के साथ बनाना है, मूल और पायथन पर प्रतिक्रिया करता है। यह वेबपेज Django का उपयोग करता है और टाइप करें और टाइप करें CISWIND सीएसएस के साथ प्रतिक्रिया करता है। इसमें शामिल होगा:

# एक पोर्टफोलियो अनुप्रयोग

# एक नोट्स आवेदन

# एक करने के लिए आवेदन करने के लिए

# एक CommerceJS आवेदन

# एक मौसम आवेदन

# एक ग्राहक संबंध प्रबंधन आवेदन

# महत्वपूर्ण वर्गों और घटकों में शामिल होंगे:

# सामाजिक लॉगिन

# टिप्पणी अनुभाग

# EmailJS

# PayPal और पट्टी एकीकरण

# अंतर्राष्ट्रीयकरण

# उपकरण इस्तेमाल किया

दृश्यपटल: ReactJS, TailwindCSS, Typescript
बैकएंड: Django, Django आरईएसटी फ्रेमवर्क

# कोड उपयोग

- टेम्पलेट खोलना
- या
- भंडार क्लोन
- अपने पर्यावरण बनाएँ
- फिर अपने पर्यावरण को सक्रिय करें

```shell
      python -m venv env
```

```shell
      source env/bin/activate
```

- [project1] बेस फ़ोल्डर जिसमें आवश्यकताएँ.txt फ़ाइल पर नेविगेट करें।
- फिर सभी आवश्यकताओं को स्थापित करें

```shell
       cd project1
```

```shell
      pip install -r requirements.txt
```

- माइग्रेशन करें
- तो परिवर्तन माइग्रेट

```shell
       python3 manage.py makemigrations
```

```shell
       python3 manage.py migrate
```

- फ्रंट एंड फ़ोल्डर पर नेविगेट करें
- तो एनपीएम स्थापित करें

```shell
       cd frontend
```

```shell
      npm install
```

- फ़ाइलें बनाएँ
- फिर रूट निर्देशिका के लिए वापस नेविगेट

```shell
      npm run build
```

```shell
       cd ..
```

- विकास मोड में कोड चलाने के लिए नीचे दिए गए आदेश चलाएँ
- फिर ब्राउज़र में एप्लिकेशन को देखने और परीक्षण करने के लिए [http://127.0.0.1:8000/] (http://127.0.0.1:8000/) खोलें।

```shell
       python manage.py runserver
```

# EmailJS

[https://dashboard.emailjs.com/sign-up]:
केवल क्लाइंट-साइड टेक्नोलॉजीज का उपयोग करते हुए ईमेल भेजें कोई सर्वर आवश्यक नहीं है सबसे पहले, एक निशुल्क खाता बनाने के लिए ऊपर दिए गए लिंक का उपयोग करें और निम्न स्थान बदलने के लिए अपना डेटा प्राप्त करें:
'SERVICE ID', 'TEMPLATE ID', 'User ID'

# project1\frontend\src\general\ContactUs.tsx

emailjs
.sendForm(
"service_v9n4dyx",
"template_bfro6dg",
form.current,
"kNN4y37J6-A9XlG31"

# Commerce.js

यह सुनिश्चित करने के लिए कि आपके पास कुछ उत्पाद डेटा है, साथ ही हमने एक डेमो व्यापारी सार्वजनिक कुंजी प्रदान की है.
[https://dashboard.chec.io/signup]
आपको अपने API क्रेडेंशियल्स प्राप्त करने के लिए पहले एक खाता बनाने की आवश्यकता होगी। ऊपर दिए गए लिंक का उपयोग करके किसी खाते के लिए साइन अप करें. अपनी जनरेट की गई सार्वजनिक और गुप्त कुंजियों को प्राप्त करने के लिए नीचे दिखाए गए अनुसार सेटिंग्स के तहत डेवलपर अनुभाग पर नेविगेट करें. फ़ाइल में अपने स्वयं के साथ डेमो सार्वजनिक कुंजी को बदलें [.env].
[https://dashboard.chec.io/settings/developer]

# project1\frontend\.env

REACT_APP_CHEC_PUBLIC_KEY=pk_184625ed86f36703d7d233bcf6d519a4f9398f20048ec

# Supabase Comments Extension

[https://app.supabase.io/]
ऊपर दिए गए लिंक पर जाएं और डेटाबेस करें - यह सरल है और कुछ मिनट लगते हैं। फिर नीचे दिए गए कमांड के साथ कुछ तालिकाओं को जोड़ें जिसमें अंतिम कनेक्शन के रूप में आपका कनेक्शन स्ट्रिंग शामिल है। आप डैशबोर्ड पर अपना कनेक्शन स्ट्रिंग पा सकते हैं:
[https://app.supabase.io/project/PUT-YOUR-PROJECT-ID-HERE/settings/database]

npx supabase-comments-extension run-migrations <postgres://postgres:some-made-up-password@db.ddziybrgjepxqpsflsiv.supabase.co:5432/postgres

# PayPal

[https://paypal.com/]
सबसे पहले, एक पेपैल खाता बनाने के लिए ऊपर दिए गए लिंक पर जाएं। एक बार किया जाता है, अपने क्रेडेंशियल्स प्राप्त करने के लिए नीचे पेपैल डेवलपर स्क्रीन पर जाएं - आपका ग्राहक आपका सैंडबॉक्स खाता एक ईमेल पता होगा जो आप परीक्षण भुगतान करने के लिए उपयोग कर सकते हैं, जबकि आपका क्लाइंट आईडी आपके पेपैल खाते में आपके आवेदन को कनेक्ट करने के लिए क्या पेपैल उपयोग करता है। अपने आप से बदलें [https://developer.paypal.com/developer/applications/]

# project1\frontend\src\paypalPayment\constants\clientID.ts

export const PAYPAL_CLIENT_ID = {
clientId:
"ARKjojd867g46kvryMoHyd3-Amteqpbuhtxw6WyP6EF0oW2HlKheCc9uFq_gKhaTYn9pJ77rMqlXsjEb",
};

# Indonesian id

# Tujuannya adalah untuk membangun sejumlah aplikasi mobile, desktop dan web dengan reaksaji, bereaksi asli dan python. Webapp ini menggunakan Django dan bereaksi dengan Typescript dan Tailwind CSS. Ini akan meliputi:

# Aplikasi Portofolio

# Aplikasi Catatan

# Aplikasi To-do

# Aplikasi CommerceJS

# Aplikasi Cuaca

# Aplikasi Manajemen Hubungan Pelanggan

# Bagian dan komponen penting akan mencakup:

# Login sosial

# Bagian Komentar

# EmailJS

# integrasi PayPal dan Stripe

# Internasionalisasi

# Alat yang Digunakan

Frontend: ReactJS, TailwindCSS, Typescript
Backend: Django, Django REST Framework

# Penggunaan Kode

- unzip template
- atau

- Mengkloning repositori
- Ciptakan lingkungan Anda
- Kemudian aktifkan lingkungan Anda

```shell
      python -m venv env
```

```shell
      source env/bin/activate
```

- Navigasikan ke folder dasar [project1] yang berisi file .txt persyaratan.
- Kemudian instal semua persyaratan

```shell
       cd project1
```

```shell
      pip install -r requirements.txt
```

- Melakukan migrasi
- Kemudian migrasikan perubahan

```shell
       python3 manage.py makemigrations
```

```shell
       python3 manage.py migrate
```

- Menavigasi ke folder ujung depan
- Kemudian instal npm

```shell
       cd frontend
```

```shell
      npm install
```

- Membangun file
- Kemudian navigasikan kembali ke direktori root

```shell
      npm run build
```

```shell
       cd ..
```

- Jalankan perintah di bawah ini untuk menjalankan kode dalam mode pengembangan
- Kemudian buka [http://127.0.0.1:8000/](http://127.0.0.1:8000/) untuk melihat dan menguji aplikasi di browser

```shell
       python manage.py runserver
```

# EmailJS

[https://dashboard.emailjs.com/sign-up]:
Kirim email menggunakan teknologi client-side. Tidak ada server yang dibutuhkan. Pertama, gunakan link di atas untuk membuat akun gratis dan mendapatkan data Anda sendiri untuk menggantikan hal berikut:
'SERVICE ID', 'TEMPLATE ID', 'User ID'

# project1\frontend\src\general\ContactUs.tsx

emailjs
.sendForm(
"service_v9n4dyx",
"template_bfro6dg",
form.current,
"kNN4y37J6-A9XlG31"

# Commerce.js

Untuk memastikan Anda memiliki beberapa data produk untuk bekerja sama, kami memberikan kunci pameran damai.
[https://dashboard.chec.io/signup]
Pertama-tama Anda harus membuat akun untuk mendapatkan kredensial API Anda. Daftar akun menggunakan tautan di atas. Navigasikan ke bagian pengembang di bawah pengaturan seperti yang ditunjukkan di bawah ini untuk mendapatkan kunci publik dan rahasia yang Anda hasilkan. Ganti kunci publik demo dengan kunci Anda sendiri dalam file [.env].
[https://dashboard.chec.io/settings/developer]

# project1\frontend\.env

REACT_APP_CHEC_PUBLIC_KEY=pk_184625ed86f36703d7d233bcf6d519a4f9398f20048ec

# Supabase Comments Extension

[https://app.supabase.io/]
Pergi ke link di atas dan buat database - itu sederhana dan butuh beberapa menit. Kemudian tambahkan beberapa tabel dengan perintah di bawah ini yang mencakup string koneksi Anda sebagai bagian terakhir. Anda dapat menemukan string koneksi Anda di dasbor:
[https://app.supabase.io/project/PUT-YOUR-PROJECT-ID-HERE/settings/database]

npx supabase-comments-extension run-migrations <postgres://postgres:some-made-up-password@db.ddziybrgjepxqpsflsiv.supabase.co:5432/postgres

# PayPal

[https://paypal.com/]
Pertama, pergi ke link di atas untuk membuat akun PayPal. Setelah selesai, pergilah ke layar Pengembang PayPal di bawah ini untuk mendapatkan kredensial Anda - klien Anda. Akun Sandbox Anda akan menjadi alamat email yang dapat Anda gunakan untuk melakukan pembayaran tes saat ID klien Anda adalah apa yang digunakan PayPal untuk menghubungkan aplikasi Anda ke akun PayPal Anda. Ganti dengan Anda sendiri. [https://developer.paypal.com/developer/applications/]

# project1\frontend\src\paypalPayment\constants\clientID.ts

export const PAYPAL_CLIENT_ID = {
clientId:
"ARKjojd867g46kvryMoHyd3-Amteqpbuhtxw6WyP6EF0oW2HlKheCc9uFq_gKhaTYn9pJ77rMqlXsjEb",
};

# Italian it

# L'obiettivo è quello di costruire una serie di applicazioni mobili, desktop e web con reactjs, reagiscono nativi e pitoni. Questo Webapp utilizza Django e reagire con i tipi di clip e tailwind CSS. Include:

# Un'applicazione portfolio

# Un'applicazione Notes

# Un'applicazione To-do

# Un'applicazione CommerceJS

# Un'applicazione meteo

# Un'applicazione di gestione delle relazioni con i clienti

# Sezioni e componenti importanti includeranno:

# Accesso social

# Sezione commenti

# EmailJS

# integrazioni PayPal e Stripe

# Internazionalizzazione

# Strumenti utilizzati

Frontend: ReactJS, TailwindCSS, Dattiloscritto
Backend: Django, Django REST Framework

# Utilizzo del codice

- decomprimere il template
- oppure

- Clonare il repository
- Crea il tuo ambiente
- Quindi attivare l'ambiente

```shell
      python -m venv env
```

```shell
      source env/bin/activate
```

- Passare alla cartella di base [project1] che contiene il file requirements.txt.
- Quindi installare tutti i requisiti

```shell
       cd project1
```

```shell
      pip install -r requirements.txt
```

- Effettuare migrazioni
- Quindi migrare le modifiche

```shell
       python3 manage.py makemigrations
```

```shell
       python3 manage.py migrate
```

- Passare alla cartella front-end
- Quindi installare npm

```shell
       cd frontend
```

```shell
      npm install
```

- Crea i file
- Quindi tornare alla directory principale

```shell
      npm run build
```

```shell
       cd ..
```

- Eseguire il comando riportato di seguito per eseguire il codice in modalità di sviluppo
- Quindi aprire [http://127.0.0.1:8000/] (http://127.0.0.1:8000/) per visualizzare e testare l'applicazione nel browser

```shell
       python manage.py runserver
```

# EmailJS

[https://dashboard.emailjs.com/sign-up]:
Invia solo email in base alle tecnologie del lato client. Nessun server richiesto. Innanzitutto, utilizzare il link qui sopra per creare un account gratuito e ottenere i propri dati per sostituire quanto segue:
'SERVICE ID', 'TEMPLATE ID', 'User ID'

# project1\frontend\src\general\ContactUs.tsx

emailjs
.sendForm(
"service_v9n4dyx",
"template_bfro6dg",
form.current,
"kNN4y37J6-A9XlG31"

# Commerce.js

Per assicurarsi di avere alcuni dati di prodotto da lavorare, abbiamo fornito una chiave pubblica demmergiata demo.
[https://dashboard.chec.io/signup]
Dovrai prima creare un account per ottenere le tue credenziali API. Registrati per un account utilizzando il link sopra. Passare alla sezione sviluppatori nelle impostazioni come mostrato di seguito per ottenere le chiavi pubbliche e segrete generate. Sostituisci la chiave pubblica demo con la tua nel file [.env].
[https://dashboard.chec.io/settings/developer]

# project1\frontend\.env

REACT_APP_CHEC_PUBLIC_KEY=pk_184625ed86f36703d7d233bcf6d519a4f9398f20048ec

# Supabase Comments Extension

[https://app.supabase.io/]
Vai al link sopra e effettuare un database - è semplice e prende pochi minuti. Quindi aggiungere alcune tabelle con il comando qui sotto, inclusi la stringa di connessione come ultima parte. È possibile trovare la stringa di connessione sul cruscotto:
[https://app.supabase.io/project/PUT-YOUR-PROJECT-ID-HERE/settings/database]

npx supabase-comments-extension run-migrations <postgres://postgres:some-made-up-password@db.ddziybrgjepxqpsflsiv.supabase.co:5432/postgres

# PayPal

[https://paypal.com/]
Innanzitutto, vai al link qui sopra per creare un account PayPal. Una volta fatto, testare sullo schermo del paypal sviluppatore qui sotto per ottenere le tue credenziali - il tuo clientID. Il tuo account Sandbox sarà un indirizzo email che è possibile utilizzare per fare pagamenti di prova mentre il tuo ID client è ciò che paga PayPal per collegare l'applicazione al tuo account PayPal. Sostituire con il proprio. [https://developer.paypal.com/developer/applications/]

# project1\frontend\src\paypalPayment\constants\clientID.ts

export const PAYPAL_CLIENT_ID = {
clientId:
"ARKjojd867g46kvryMoHyd3-Amteqpbuhtxw6WyP6EF0oW2HlKheCc9uFq_gKhaTYn9pJ77rMqlXsjEb",
};

# Japanese ja

# 目的は、ReactJS を搭載した多数のモバイル、デスクトップ、Web アプリケーションを構築することです。 このウェイバップは Django を使用し、Typescript と Tailwind CSS と反応します。 それは次のものを含みます

# ポートフォリオアプリケーション

# ノートアプリケーション

# To-Do アプリケーション

# コマース JS アプリケーション

#天気予報アプリケーション

# 顧客関係管理アプリケーション

# 重要なセクションとコンポーネントは次のとおりです。

# ソーシャルログイン

# コメントセクション

# 電子メール JS

# PayPal とストライプの統合

# 国際化

# 使用するツール

フロントエンド: ReactJS, TailwindCSS, Typescript
バックエンド: Django, Django REST フレームワーク

# コードの使用法

- テンプレートを解凍する
- または

- リポジトリのクローンを作成する
- あなたの環境を作成します。
- その後、環境をアクティブにします

```shell
      python -m venv env
```

```shell
      source env/bin/activate
```

- 要件.txt ファイルを含む[project1]ベースフォルダに移動します。
- その後、すべての要件をインストールします

```shell
       cd project1
```

```shell
      pip install -r requirements.txt
```

- 移行を行う
- その後、変更を移行する

```shell
       python3 manage.py makemigrations
```

```shell
       python3 manage.py migrate
```

- フロントエンドフォルダに移動します
- その後、npm をインストールします

```shell
       cd frontend
```

```shell
      npm install
```

- ファイルを構築する
- その後、ルートディレクトリに戻ります

```shell
      npm run build
```

```shell
       cd ..
```

- 以下のコマンドを実行して、開発モードでコードを実行します
- 次に、[http://127.0.0.1:8000/](http://127.0.0.1:8000/)を開き、ブラウザでアプリケーションを表示およびテストします

```shell
       python manage.py runserver
```

# EmailJS

[https://dashboard.emailjs.com/sign-up]:
クライアント側のテクノロジーを使用して電子メールを送信します。 サーバーは必要ありません。 まず、上記のリンクを使用して無料のアカウントを作成し、独自のデータを取得して次の処理を置きます。
'SERVICE ID', 'TEMPLATE ID', 'User ID'

# project1\frontend\src\general\ContactUs.tsx

emailjs
.sendForm(
"service_v9n4dyx",
"template_bfro6dg",
form.current,
"kNN4y37J6-A9XlG31"

# Commerce.js

製品を使用するために製品データを確保するために、デモ・マーチャント・公開鍵を提供した.
[https://dashboard.chec.io/signup]
まず、API 資格情報を取得するためのアカウントを作成する必要があります。上記のリンクを使用してアカウントにサインアップします。次に示すように、[設定] の下の [開発者] セクションに移動して、生成された公開キーと秘密キーを取得します。デモの公開鍵をファイル内の独自の公開鍵に置き換えます[.env].
[https://dashboard.chec.io/settings/developer]

# project1\frontend\.env

REACT_APP_CHEC_PUBLIC_KEY=pk_184625ed86f36703d7d233bcf6d519a4f9398f20048ec

# Supabase Comments Extension

[https://app.supabase.io/]
上記のリンクに移動してデータベースを作成します。シンプルで、数分かかります。 次に、接続文字列を最後の部分として含む以下のコマンドで数メリアを追加します。 ダッシュボードの接続文字列を見つけることができます：
[https://app.supabase.io/project/PUT-YOUR-PROJECT-ID-HERE/settings/database]

npx supabase-comments-extension run-migrations <postgres://postgres:some-made-up-password@db.ddziybrgjepxqpsflsiv.supabase.co:5432/postgres

# PayPal

[https://paypal.com/]
まず、上記のリンクに移動して PayPal アカウントを作成します。 一度完了した後、Permpal Developer 画面に頭を押して、あなたのクレデンシャルを取得します。クライアント ID。 あなたのサンドボックスアカウントは、クライアント ID が PayPal アカウントにアプリケーションを接続するために使用するものである間、テスト支払いを行うために使用できる電子メールアドレスになります。 あなた自身に置き換えます。[https://developer.paypal.com/developer/applications/]

# project1\frontend\src\paypalPayment\constants\clientID.ts

export const PAYPAL_CLIENT_ID = {
clientId:
"ARKjojd867g46kvryMoHyd3-Amteqpbuhtxw6WyP6EF0oW2HlKheCc9uFq_gKhaTYn9pJ77rMqlXsjEb",
};

# Marathi mr

# उद्देश्य, मोबाइल डेस्कटॉप आणि वेब अॅप्स अ रीजेजसह तयार करणे, मूळ आणि पायथन प्रतिक्रिया देणे. हे वेबॅप्ज Djjog चा वापर करते आणि Thatscrist आणि Tailwind CSS सह प्रतिक्रिया देते. त्यात समाविष्ट होईल:

# एक पोर्टफोलिओ अनुप्रयोग

# एक नोट्स अनुप्रयोग

# एक टू-टू ऍप्लीकेशन

# एक कॉमर्सज अनुप्रयोग

# एक हवामान अनुप्रयोग

# ग्राहक संबंध व्यवस्थापन अनुप्रयोग

# महत्त्वाचे विभाग आणि घटक समाविष्ट असतील:

# सामाजिक लॉगिन

# टिप्पणी विभाग

# ईमेलज्स्

# पेपल आणि स्ट्राइप इंटिग्रेशन

# आंतरराष्ट्रीयकरण

वापरलेले # साधने
Frontend: reactjs, tailwindcss, टाईपस्क्रिप्ट
बॅकएंड: Django, Django विश्रांती फ्रेमवर्क

# कोड वापर

- टेम्पलेट अनझिप करा
- किंवा
- रेपॉजिटरी क्लोन
- आपले वातावरण तयार करा
- नंतर आपले वातावरण सक्रिय करा

```shell
      python -m venv env
```

```shell
      source env/bin/activate
```

- Navigate to the [project1] base folder that contains the requirements.txt file.
- Then install all requirements

```shell
       cd project1
```

```shell
      pip install -r requirements.txt
```

- स्थलांतरण करा
- नंतर बदल स्थलांतरित करा

```shell
       python3 manage.py makemigrations
```

```shell
       python3 manage.py migrate
```

- समोरच्या बाजूला फोल्डरवर नेव्हिगेट करा
- नंतर npm स्थापित करा

```shell
       cd frontend
```

```shell
      npm install
```

- फायली तयार करा
- नंतर रूट निर्देशिकाकडे नेव्हिगेट करा

```shell
      npm run build
```

```shell
       cd ..
```

- विकास मोडमध्ये कोड चालविण्यासाठी खालील आज्ञा चालवा
- नंतर ब्राउझरमध्ये अनुप्रयोग पाहण्यासाठी आणि चाचणी करण्यासाठी [http://127.0.0.18.0.0000/3] · http://127.0.0.1:8000/) उघडा.

```shell
       python manage.py runserver
```

# EmailJS

[https://dashboard.emailjs.com/sign-up]:
केवळ क्लायंट-साइड तंत्रज्ञानाचा वापर करून ईमेल पाठवा सर्व्हरची आवश्यकता नाही. प्रथम, विनामूल्य खाते तयार करण्यासाठी वरील दुव्याचा वापर करा आणि खालील पुनर्स्थित करण्यासाठी आपला स्वतःचा डेटा मिळवा: 'SERVICE ID', 'TEMPLATE ID', 'User ID'

# project1\frontend\src\general\ContactUs.tsx

emailjs
.sendForm(
"service_v9n4dyx",
"template_bfro6dg",
form.current,
"kNN4y37J6-A9XlG31"

# Commerce.js

आपल्याकडे कार्य करण्यासाठी काही उत्पादन डेटा असल्याचे सुनिश्चित करण्यासाठी, आम्ही डेमो व्यापारी सार्वजनिक की प्रदान केली.
[https://dashboard.chec.io/signup]
आपले एपीआय क्रेडेन्शियल्स मिळविण्यासाठी आपल्याला प्रथम खाते तयार करण्याची आवश्यकता असेल. वरील लिंक वापरुन खात्यासाठी साइन अप करा. आपली व्युत्पन्न सार्वजनिक आणि गुप्त की मिळविण्यासाठी खाली दाखवल्याप्रमाणे सेटिंग्ज अंतर्गत विकसक विभागात नेव्हिगेट करा. फाइलमध्ये डेमो सार्वजनिक किल्लीला आपल्या स्वत: च्या सह बदला [.env].
[https://dashboard.chec.io/settings/developer]

# project1\frontend\.env

REACT_APP_CHEC_PUBLIC_KEY=pk_184625ed86f36703d7d233bcf6d519a4f9398f20048ec

# Supabase Comments Extension

[https://app.supabase.io/]
उपरोक्त दुव्यावर जा आणि डेटाबेस करा - हे सोपे आहे आणि काही मिनिटे लागतात. नंतर खालील आज्ञा आधारावर काही सारण्या जोडा जे आपले कनेक्शन STRING शेवटचे भाग म्हणून समाविष्ट करते. आपण डॅशबोर्डवर आपले कनेक्शन STRING शोधू शकता:
[https://app.supabase.io/project/PUT-YOUR-PROJECT-ID-HERE/settings/database]

npx supabase-comments-extension run-migrations <postgres://postgres:some-made-up-password@db.ddziybrgjepxqpsflsiv.supabase.co:5432/postgres

# PayPal

[https://paypal.com/]
प्रथम, PayPal खाते तयार करण्यासाठी वरील दुव्यावर जा. पूर्ण झाल्यानंतर, आपल्या क्रेडेन्शियल मिळविण्यासाठी खालील PayPal विकासक स्क्रीनवर जा - आपले Cristoid. आपले सॅन्डबॉक्स खाते आपण वापरत असलेल्या ईमेल पत्त्यावर असेल ज्यायोगे आपला ग्राहक आपल्या पेपैल खात्याशी जोडण्यासाठी पेपैल वापरण्यासाठी काय चाचणी आहे ते चाचणी देयके बनविण्यासाठी आपण वापरू शकता. आपल्या स्वत: च्या सह पुनर्स्थित [https://developer.paypal.com/developer/applications/]

# project1\frontend\src\paypalPayment\constants\clientID.ts

export const PAYPAL_CLIENT_ID = {
clientId:
"ARKjojd867g46kvryMoHyd3-Amteqpbuhtxw6WyP6EF0oW2HlKheCc9uFq_gKhaTYn9pJ77rMqlXsjEb",
};

# Portuguese pt

# O objetivo é construir uma série de aplicativos móveis, desktop e web com reactjs, reative native and python. Este Webapp usa Django e reagir com o tipo de tela e o Tailwind CSS. Incluirá:

# Uma aplicação de portfólio

# Um pedido de notas

# Uma aplicação para fazer

# Uma aplicação CommerceJS

# Uma aplicação meteorológica

# Uma aplicação de gestão de relações com o cliente

# Secções e componentes importantes incluirão:

# Login social

# Secção de comentários

# EmailJS

# integrações PayPal e Stripe

Internacionalização

# Ferramentas Usadas

Frontend: ReactJS, TailwindCSS, Typescript
Backend: Django, Django REST Framework

# Utilização de códigos

- desapertar o modelo
- ou

- Clonar o repositório
- Criar o seu ambiente
- Em seguida, ativar o seu ambiente

```shell
      python -m venv env
```

```shell
      source env/bin/activate
```

- Navegue para a pasta base [project1] que contém os requisitos.txt ficheiro.
- Em seguida, instale todos os requisitos

```shell
       cd project1
```

```shell
      pip install -r requirements.txt
```

- Fazer migrações
- Em seguida, migrar mudanças

```shell
       python3 manage.py makemigrations
```

```shell
       python3 manage.py migrate
```

- Navegue para a pasta frontal
- Em seguida, instale npm

```shell
       cd frontend
```

```shell
      npm install
```

- Construir os ficheiros
- Em seguida, navegar de volta para o diretório de raiz

```shell
      npm run build
```

```shell
       cd ..
```

- Executar o comando abaixo para executar o código em modo de desenvolvimento
- Em seguida, abra [http://127.0.0.1:8000/](http://127.0.0.1:8000/) para visualizar e testar a aplicação no navegador

```shell
       python manage.py runserver
```

# EmailJS

[https://dashboard.emailjs.com/sign-up]:
Envie enviar e-mails usando apenas tecnologias do lado do cliente. Nenhum servidor necessário. Primeiro, use o link acima para criar uma conta gratuita e obtenha seus próprios dados para substituir o seguinte: 'SERVICE ID', 'TEMPLATE ID', 'User ID'

# project1\frontend\src\general\ContactUs.tsx

emailjs
.sendForm(
"service_v9n4dyx",
"template_bfro6dg",
form.current,
"kNN4y37J6-A9XlG31"

# Commerce.js

Para garantir que você tenha alguns dados do produto para trabalhar, forneçamos uma chave pública de comercialização de demonstração.
[https://dashboard.chec.io/signup]
Primeiro terá de criar uma conta para obter as suas credenciais API. Inscreva-se para uma conta utilizando o link acima. Navegue na secção de desenvolvedores em definições como mostrado abaixo para obter as suas chaves públicas e secretas geradas. Substitua a chave pública de demonstração pela sua própria no ficheiro [.env].
[https://dashboard.chec.io/settings/developer]

# project1\frontend\.env

REACT_APP_CHEC_PUBLIC_KEY=pk_184625ed86f36703d7d233bcf6d519a4f9398f20048ec

# Supabase Comments Extension

[https://app.supabase.io/]
Vá para o link acima e faça um banco de dados - é simples e leva alguns minutos. Em seguida, adicione algumas tabelas com o comando abaixo, que incluem sua seqüência de conexão como a última parte. Você pode encontrar sua seqüência de conexão no painel:
[https://app.supabase.io/project/PUT-YOUR-PROJECT-ID-HERE/settings/database]

npx supabase-comments-extension run-migrations <postgres://postgres:some-made-up-password@db.ddziybrgjepxqpsflsiv.supabase.co:5432/postgres

# PayPal

[https://paypal.com/]
Primeiro, vá para o link acima para criar uma conta do PayPal. Uma vez feito, vá para a tela do desenvolvedor do PayPal abaixo para obter suas credenciais - seu cliente. Sua conta de sandbox será um endereço de e-mail que você pode usar para fazer pagamentos de teste enquanto o ID do cliente é o que o PayPal usa para conectar seu aplicativo à sua conta do PayPal. Substitua com o seu próprio. [https://developer.paypal.com/developer/applications/]

# project1\frontend\src\paypalPayment\constants\clientID.ts

export const PAYPAL_CLIENT_ID = {
clientId:
"ARKjojd867g46kvryMoHyd3-Amteqpbuhtxw6WyP6EF0oW2HlKheCc9uFq_gKhaTYn9pJ77rMqlXsjEb",
};

# Russian ru

# Цель состоит в том, чтобы создать ряд мобильных, рабочий стол и веб-приложений с ReactJS, реагировать нативным и питону. Эта веб-страница использует Django и реагирует с Typencript и Tailwind CSS. Он будет включать:

# Портфельное приложение

# Приложение заметок

# Приложение to-do

# Приложение CommerceJS

# Погодное приложение

# Приложение для управления взаимоотношениями с клиентами

# Важные разделы и компоненты будут включать:

# Социальный вход

# Раздел комментариев

# Электронная почтаJS

# PayPal и Stripe интеграции

# Интернационализация

# Используемые инструменты

Фронтенд: ReactJS, TailwindCSS, Машинописный текст
Бэкэнд: Django, Django REST Framework

# Использование кода

- распакуйте шаблон
- или

- Клонирование репозитория
- Создайте свою среду
- Затем активируйте свою среду

```shell
      python -m venv env
```

```shell
      source env/bin/activate
```

- Перейдите в базовую папку [project1], содержащую файл требований.txt.
- Затем установите все требования

```shell
       cd project1
```

```shell
      pip install -r requirements.txt
```

- Выполнение миграций
- Затем перенос изменений

```shell
       python3 manage.py makemigrations
```

```shell
       python3 manage.py migrate
```

- Переход к интерфейсной папке
- Затем установите npm

```shell
       cd frontend
```

```shell
      npm install
```

- Сборка файлов
- Затем вернитесь в корневой каталог

```shell
      npm run build
```

```shell
       cd ..
```

- Выполните приведенную ниже команду, чтобы запустить код в режиме разработки
- Затем откройте [http://127.0.0.1:8000/](http://127.0.0.1:8000/) для просмотра и тестирования приложения в браузере

```shell
       python manage.py runserver
```

# EmailJS

[https://dashboard.emailjs.com/sign-up]:
Отправьте электронные письма, используя только технологии клиентских технологий. Не требуется сервер. Во-первых, используйте ссылку выше, чтобы создать бесплатную учетную запись и получить свои данные для замены следующего:
'SERVICE ID', 'TEMPLATE ID', 'User ID'

# project1\frontend\src\general\ContactUs.tsx

emailjs
.sendForm(
"service_v9n4dyx",
"template_bfro6dg",
form.current,
"kNN4y37J6-A9XlG31"

# Commerce.js

Чтобы у вас есть данные о продукте, чтобы работать, мы предоставили домашнюю кровать для демо-берем.
[https://dashboard.chec.io/signup]
Сначала необходимо создать учетную запись, чтобы получить учетные данные API. Зарегистрируйте учетную запись, используя ссылку выше. Перейдите в раздел разработчика в разделе настроек, как показано ниже, чтобы получить созданные открытые и секретные ключи. Замените демо-ключ на свой собственный в файле [.env].
[https://dashboard.chec.io/settings/developer]

# project1\frontend\.env

REACT_APP_CHEC_PUBLIC_KEY=pk_184625ed86f36703d7d233bcf6d519a4f9398f20048ec

# Supabase Comments Extension

[https://app.supabase.io/]
Перейдите к ссылке выше и сделайте базу данных - это просто и занимает несколько минут. Затем добавьте несколько таблиц с командой, в которой включаются в строку подключения в качестве последней части. Вы можете найти соединительную строку на панели инструментов:
[https://app.supabase.io/project/PUT-YOUR-PROJECT-ID-HERE/settings/database]

npx supabase-comments-extension run-migrations <postgres://postgres:some-made-up-password@db.ddziybrgjepxqpsflsiv.supabase.co:5432/postgres

# PayPal

[https://paypal.com/]
Во-первых, перейдите к ссылке выше, чтобы создать учетную запись PayPal. После того, как он сделан, отправитесь на экран разработчика PayPal ниже, чтобы получить ваши учетные данные - ваш клиендий. Ваша учетная запись песочницы будет адресом электронной почты, который вы можете использовать для того, чтобы сделать тестовые платежи, в то время как ваш клиент ID - это то, что используется PayPal для подключения вашего приложения на ваш учетный учет PayPal. Замените свои собственные. [https://developer.paypal.com/developer/applications/]

# project1\frontend\src\paypalPayment\constants\clientID.ts

export const PAYPAL_CLIENT_ID = {
clientId:
"ARKjojd867g46kvryMoHyd3-Amteqpbuhtxw6WyP6EF0oW2HlKheCc9uFq_gKhaTYn9pJ77rMqlXsjEb",
};

#Spanish es

# El objetivo es construir una serie de aplicaciones móviles, escritorio y web con REACTJS, reaccionar nativos y python. Esta webApp utiliza Django y reacciona con tymscript y Ti-Airfind CSS. Incluirá:

# Una aplicación de cartera

# Una aplicación de notes

# Una aplicación de tareas pendientes

# Una aplicación CommerceJS

# Una aplicación meteorológica

# Una aplicación de gestión de relaciones con el cliente

# Las secciones y componentes importantes incluirán:

# Inicio de sesión social

# Sección de comentarios

# EmailJS

# PayPal y Stripe

# Internacionalización

# Herramientas utilizadas

Frontend: ReactJS, TailwindCSS, Typescript
Backend: Django, Django REST Framework

# Uso del código

- descomprimir la plantilla
- o

- Clonar el repositorio
- Crea tu entorno
- A continuación, active su entorno

```shell
      python -m venv env
```

```shell
      source env/bin/activate
```

- Desplácese hasta la carpeta base [project1] que contiene el archivo de requisitos.txt.
- A continuación, instale todos los requisitos

```shell
       cd project1
```

```shell
      pip install -r requirements.txt
```

- Realizar migraciones
- A continuación, migrar los cambios

```shell
       python3 manage.py makemigrations
```

```shell
       python3 manage.py migrate
```

- Desplácese hasta la carpeta front-end
- Luego instale npm

```shell
       cd frontend
```

```shell
      npm install
```

- Compilar los archivos
- Luego navegue de regreso al directorio raíz

```shell
      npm run build
```

```shell
       cd ..
```

- Ejecute el siguiente comando para ejecutar el código en modo de desarrollo
- Luego abra [http://127.0.0.1:8000/](http://127.0.0.1:8000/) para ver y probar la aplicación en el navegador

```shell
       python manage.py runserver
```

# EmailJS

[https://dashboard.emailjs.com/sign-up]:
Envíe los correos electrónicos solo con tecnologías de lado del cliente. No se requiere servidor. Primero, use el enlace de arriba para crear una cuenta gratuita y obtener sus propios datos para reemplazar lo siguiente:
'SERVICE ID', 'TEMPLATE ID', 'User ID'

# project1\frontend\src\general\ContactUs.tsx

emailjs
.sendForm(
"service_v9n4dyx",
"template_bfro6dg",
form.current,
"kNN4y37J6-A9XlG31"

# Commerce.js

Para asegurarse de tener algunos datos de productos para trabajar, proporcionamos una clave pública de comercio de demostración.
[https://dashboard.chec.io/signup]
Primero deberá crear una cuenta para obtener sus credenciales de API. Regístrese para obtener una cuenta utilizando el enlace de arriba. Navegue a la sección de desarrolladores en configuración como se muestra a continuación para obtener las claves públicas y secretas generadas. Reemplace la clave pública de demostración por la suya propia en el archivo [.env].
[https://dashboard.chec.io/settings/developer]

# project1\frontend\.env

REACT_APP_CHEC_PUBLIC_KEY=pk_184625ed86f36703d7d233bcf6d519a4f9398f20048ec

# Supabase Comments Extension

[https://app.supabase.io/]
Vaya al enlace de arriba y haga una base de datos; es simple y toma unos minutos. Luego agregue algunas tablas con el comando a continuación que incluyen su cadena de conexión como la última parte. Puede encontrar su conexión de conexión en el tablero:
[https://app.supabase.io/project/PUT-YOUR-PROJECT-ID-HERE/settings/database]

npx supabase-comments-extension run-migrations <postgres://postgres:some-made-up-password@db.ddziybrgjepxqpsflsiv.supabase.co:5432/postgres

# PayPal

[https://paypal.com/]
Primero, vaya al enlace de arriba para crear una cuenta de PayPal. Una vez hecho, diríjase a la pantalla de desarrollador de PayPal a continuación para obtener sus credenciales, su cliente. Su cuenta de Sandbox será una dirección de correo electrónico que puede usar para realizar pagos de prueba mientras su ID de cliente es lo que usa PayPal para conectar su aplicación a su cuenta de PayPal. Reemplace con el suyo. [https://developer.paypal.com/developer/applications/]

# project1\frontend\src\paypalPayment\constants\clientID.ts

export const PAYPAL_CLIENT_ID = {
clientId:
"ARKjojd867g46kvryMoHyd3-Amteqpbuhtxw6WyP6EF0oW2HlKheCc9uFq_gKhaTYn9pJ77rMqlXsjEb",
};

# Swahili sw

# Lengo ni kujenga idadi ya programu za simu, desktop na mtandao na reactjs, kuitikia asili na python. WebApp hii inatumia Django na kuitikia na CyssScript na Tailwind CSS. Itakuwa ni pamoja na:

# Maombi ya Portfolio

# Maombi ya Madokezo

# Maombi ya Kufanya

# Maombi ya Wafanyabiashara

# Maombi ya Hali ya Hewa

# Maombi ya Usimamizi wa Mahusiano ya Wateja

# Sehemu muhimu na vipengele vitajumuisha:

# Kuingia kwa jamii

# Sehemu ya maoni

# Barua pepe

# PayPal na ushirikiano wa Stripe

# Kimataifa

# Zana Zinazotumiwa

Frontend: ReactJS, TailwindCSS, Typescript
Backend: Django, Mfumo wa Django REST

# Matumizi ya Msimbo

- ondoa kiolezo
- au

- Clone hazina
- Unda mazingira yako
- Kisha amsha mazingira yako

```shell
      python -m venv env
```

```shell
      source env/bin/activate
```

- Nenda kwenye folda ya msingi ya [project1] ambayo ina mahitaji.txt faili.
- Kisha sakinisha mahitaji yote

```shell
       cd project1
```

```shell
      pip install -r requirements.txt
```

- Fanya uhamiaji
- Kisha hamisha mabadiliko

```shell
       python3 manage.py makemigrations
```

```shell
       python3 manage.py migrate
```

- Nenda kwenye kabrasha la mwisho la mbele
- Kisha sakinisha npm

```shell
       cd frontend
```

```shell
      npm install
```

- Jenga faili
- Kisha rudi kwenye saraka ya mizizi

```shell
      npm run build
```

```shell
       cd ..
```

- Endesha amri hapa chini ili kuendesha nambari katika hali ya ukuzaji
- Kisha fungua [http://127.0.0.1:8000/] (http://127.0.0.1:8000/) kutazama na kujaribu programu kwenye kivinjari

```shell
       python manage.py runserver
```

# EmailJS

[https://dashboard.emailjs.com/sign-up]:
Tuma barua pepe kwa kutumia teknolojia za upande wa mteja tu. Hakuna seva inayohitajika. Kwanza, tumia kiungo hapo juu ili kuunda akaunti ya bure na kupata data yako mwenyewe kuchukua nafasi ya yafuatayo:
'SERVICE ID', 'TEMPLATE ID', 'User ID'

# project1\frontend\src\general\ContactUs.tsx

emailjs
.sendForm(
"service_v9n4dyx",
"template_bfro6dg",
form.current,
"kNN4y37J6-A9XlG31"

# Commerce.js

Ili kuhakikisha una data ya bidhaa ili kufanya kazi na, Tumetoa ufunguo wa umma wa demo.
[https://dashboard.chec.io/signup]
Utahitaji kwanza kuunda akaunti ili kupata hati zako za api. Jisajili kwa akaunti kwa kutumia kiungo hapo juu. Nenda kwenye sehemu ya msanidi programu chini ya mipangilio kama inavyoonyeshwa hapa chini ili kupata funguo zako za umma na za siri. Badilisha ufunguo wa umma wa demo na yako mwenyewe kwenye faili [.env].
[https://dashboard.chec.io/settings/developer]

# project1\frontend\.env

REACT_APP_CHEC_PUBLIC_KEY=pk_184625ed86f36703d7d233bcf6d519a4f9398f20048ec

# Supabase Comments Extension

[https://app.supabase.io/]
Nenda kiungo hapo juu na ufanye database - ni rahisi na inachukua dakika chache. Kisha kuongeza meza chache na amri hapa chini ambayo ni pamoja na kamba yako ya uunganisho kama sehemu ya mwisho. Unaweza kupata kamba yako ya uunganisho kwenye dashibodi:
[https://app.supabase.io/project/PUT-YOUR-PROJECT-ID-HERE/settings/database]

npx supabase-comments-extension run-migrations <postgres://postgres:some-made-up-password@db.ddziybrgjepxqpsflsiv.supabase.co:5432/postgres

# PayPal

[https://paypal.com/]
Kwanza, nenda kwenye kiungo hapo juu ili uunda akaunti ya PayPal. Mara baada ya kufanywa, kichwa kwenye skrini ya msanidi wa PayPal chini ili kupata sifa zako - mteja wako. Akaunti yako ya Sandbox itakuwa anwani ya barua pepe ambayo unaweza kutumia ili kulipa malipo wakati ID yako ya mteja ni nini PayPal inatumia kuunganisha programu yako kwenye akaunti yako ya PayPal. Badilisha na yako mwenyewe. [https://developer.paypal.com/developer/applications/]

# project1\frontend\src\paypalPayment\constants\clientID.ts

export const PAYPAL_CLIENT_ID = {
clientId:
"ARKjojd867g46kvryMoHyd3-Amteqpbuhtxw6WyP6EF0oW2HlKheCc9uFq_gKhaTYn9pJ77rMqlXsjEb",
};

# Tamil ta

# குறிக்கோள், மொபைல் மற்றும் டெபிஸ் போன்றவை, Reactjs உடன், சொந்த மற்றும் பைதான் செயல்படுகின்றன. இந்த வெபம்ப் டிஜாங்கோவைப் பயன்படுத்துகிறது மற்றும் நெடுவரிசை மற்றும் tailwind CSS உடன் செயல்படுகிறது. இது அடங்கும்:

# ஒரு போர்ட்ஃபோலியோ விண்ணப்பம்

# ஒரு குறிப்புகள் விண்ணப்பம்

# செய்ய வேண்டிய விண்ணப்பம்

# ஒரு காமர்ஸ்ஜேஎஸ் விண்ணப்பம்

# ஒரு வானிலை பயன்பாடு

# ஒரு வாடிக்கையாளர் உறவுகள் முகாமைத்துவ விண்ணப்பம்

# முக்கியமான பிரிவுகள் மற்றும் கூறுகள் பின்வருமாறு:

# சமூக உள்நுழைவு

# கருத்துப் பிரிவு

# மின்னஞ்சல்JS

# PayPal மற்றும் கோடு ஒருங்கிணைப்புகள்

# சர்வதேசமயமாக்கல்

# பயன்படுத்திய கருவிகள்

Frontend: ReactJS, TailwindCSS, Typescript
பின்தளம்: ஜாங்கோ, ஜாங்கோ ரெஸ்ட் ஃபிரேம்வொர்க்

# குறியீடு பயன்பாடு

- வார்ப்புருவை நீக்கவும்
- அல்லது

- களஞ்சியத்தை குளோன் செய்யவும்
- உங்கள் சூழலை உருவாக்கவும்
- பின்னர் உங்கள் சூழலை செயல்படுத்தவும்

```shell
      python -m venv env
```

```shell
      source env/bin/activate
```

- தேவைகள்.txt கோப்பு உள்ள [project1] அடிப்படை கோப்புறைக்கு செல்லவும்.
- பின்னர் அனைத்து தேவைகளையும் நிறுவவும்

```shell
       cd project1
```

```shell
      pip install -r requirements.txt
```

- இடம்பெயர்வுகளை உருவாக்கு
- பின்னர் மாற்றங்களை நகர்த்தவும்

```shell
       python3 manage.py makemigrations
```

```shell
       python3 manage.py migrate
```

- முன் முடிவு கோப்புறைக்கு செல்லவும்
- பின்னர் npm ஐ நிறுவவும்

```shell
       cd frontend
```

```shell
      npm install
```

- கோப்புகளை உருவாக்கு
- பின்னர் ரூட் கோப்பகத்திற்கு மீண்டும் செல்லவும்

```shell
      npm run build
```

```shell
       cd ..
```

- வளர்ச்சி பயன்முறையில் குறியீட்டை இயக்க கீழே உள்ள கட்டளையை இயக்கவும்
- உலாவியில் பயன்பாட்டைப் பார்க்கவும் சோதிக்கவும் [http://127.0.0.1:8000/](http://127.0.0.1:8000/) ஐத் திறக்கவும்

```shell
       python manage.py runserver
```

# EmailJS

[https://dashboard.emailjs.com/sign-up]:
கிளையன்-பக்க தொழில்நுட்பங்களைப் பயன்படுத்தி மின்னஞ்சல்களை அனுப்பவும். சேவையகம் தேவையில்லை. முதலில், ஒரு இலவச கணக்கை உருவாக்க மேலே உள்ள இணைப்பைப் பயன்படுத்தவும், பின்வருவனவற்றை மாற்ற உங்கள் சொந்த தரவைப் பெறவும்:
'SERVICE ID', 'TEMPLATE ID', 'User ID'

# project1\frontend\src\general\ContactUs.tsx

emailjs
.sendForm(
"service_v9n4dyx",
"template_bfro6dg",
form.current,
"kNN4y37J6-A9XlG31"

# Commerce.js

நீங்கள் வேலை செய்ய சில தயாரிப்பு தரவு இருப்பதை உறுதிப்படுத்த, நாங்கள் ஒரு டெமோ வணிகர் பொது விசையை வழங்கியுள்ளோம்.
[https://dashboard.chec.io/signup]
உங்கள் API நம்பிக்கைச்சான்றுகளைப் பெற நீங்கள் முதலில் ஒரு கணக்கை உருவாக்க வேண்டும். மேலே உள்ள இணைப்பைப் பயன்படுத்தி ஒரு கணக்கிற்கு பதிவுபெறவும். நீங்கள் உருவாக்கிய பொது மற்றும் இரகசிய விசைகளைப் பெற கீழே காட்டப்பட்டுள்ளபடி அமைப்புகளின் கீழ் டெவலப்பர் பிரிவுக்குச் செல்லவும். டெமோ பொது விசையை கோப்பில் உள்ள உங்கள் சொந்த விசையுடன் மாற்றவும் [.env].
[https://dashboard.chec.io/settings/developer]

# project1\frontend\.env

REACT_APP_CHEC_PUBLIC_KEY=pk_184625ed86f36703d7d233bcf6d519a4f9398f20048ec

# Supabase Comments Extension

[https://app.supabase.io/]
மேலே உள்ள இணைப்பைப் போய் ஒரு தரவுத்தளத்தை உருவாக்குங்கள் - இது எளிது மற்றும் சில நிமிடங்கள் ஆகும். கீழே உள்ள கட்டளையுடன் ஒரு சில அட்டவணையைச் சேர்க்கவும், இதில் உங்கள் இணைப்பு STRING ஐ கடைசி பகுதியையும் சேர்க்கிறது. டாஷ்போர்டில் உங்கள் இணைப்பு STRING ஐக் காணலாம்:
[https://app.supabase.io/project/PUT-YOUR-PROJECT-ID-HERE/settings/database]

npx supabase-comments-extension run-migrations <postgres://postgres:some-made-up-password@db.ddziybrgjepxqpsflsiv.supabase.co:5432/postgres

# PayPal

[https://paypal.com/]
முதலில், பேபால் கணக்கை உருவாக்க மேலே உள்ள இணைப்புக்குச் செல்லவும். ஒருமுறை முடிந்ததும், உங்கள் சான்றுகளை பெற கீழே உள்ள பேபால் டெவலப்பர் திரையில் தலைமை - உங்கள் clientient. உங்கள் Candple ஐ உங்கள் பேபால் கணக்கில் உங்கள் பயன்பாட்டை இணைக்க பேபால் பயன்படுத்துவதை பயன்படுத்தும்போது உங்கள் Candbox கணக்கு உங்கள் மின்னஞ்சல் அடையாளம் போது சோதனை பணம் செலுத்துவதற்கு நீங்கள் பயன்படுத்தக்கூடிய ஒரு மின்னஞ்சல் முகவரியாக இருக்கும். உங்கள் சொந்த மாற்றவும். [https://developer.paypal.com/developer/applications/]

# project1\frontend\src\paypalPayment\constants\clientID.ts

export const PAYPAL_CLIENT_ID = {
clientId:
"ARKjojd867g46kvryMoHyd3-Amteqpbuhtxw6WyP6EF0oW2HlKheCc9uFq_gKhaTYn9pJ77rMqlXsjEb",
};

# Telugu te

# లక్ష్యం ప్రతి ఇతర మొబైల్, డెస్క్టాప్ మరియు వెబ్ అనువర్తనాలను పునఃప్రారంభించి, స్థానిక మరియు పైథాన్ ప్రతిస్పందించడానికి లక్ష్యంగా ఉంది. ఈ వెబ్అప్ Django ను ఉపయోగిస్తుంది మరియు రకాలు మరియు tailwind CSS తో స్పందిస్తుంది. ఇది ఉంటుంది:

# పోర్ట్ ఫోలియో అప్లికేషన్

# గమనికల అప్లికేషన్

# చేయాల్సిన అప్లికేషన్

# కామర్స్ జెఎస్ అప్లికేషన్

# వాతావరణ అనువర్తనం

# కస్టమర్ రిలేషన్స్ మేనేజ్ మెంట్ అప్లికేషన్

# ముఖ్యమైన సెక్షన్ లు మరియు కాంపోనెంట్ ల్లో ఇవి చేర్చబడతాయి:

# సోషల్ లాగిన్

# వ్యాఖ్య విభాగం

# ఇమెయిల్ JS

# PayPal మరియు స్ట్రైప్ ఇంటిగ్రేషన్ లు

# అంతర్జాతీయీకరణ

# ఉపయోగించిన ఉపకరణాలు

ఫ్రంట్ ఎండ్: రియాక్ట్ జెఎస్, టెయిల్ విండ్ సిఎస్ఎస్, టైప్ స్క్రిప్ట్
బ్యాకెండ్: జాంగో, జాంగో రెస్ట్ ఫ్రేమ్ వర్క్

# కోడ్ ఉపయోగం

- టెంప్లేట్ ను అన్ జిప్ చేయండి
- లేదా

- భాండాగారాన్ని క్లోన్ చేయండి
- మీ వాతావరణాన్ని సృష్టించండి
- అప్పుడు మీ పర్యావరణాన్ని క్రియాశీలం చేయండి

```shell
      python -m venv env
```

```shell
      source env/bin/activate
```

- ఆవశ్యకతలు.txt ఫైలును కలిగి ఉన్న [project1] ఆధార సంచికకు నావిగేట్ చేయండి.
- తరువాత అన్ని ఆవశ్యకతలను వ్యవస్థాపించండి

```shell
       cd project1
```

```shell
      pip install -r requirements.txt
```

- వలసలు చేయండి
- తరువాత మార్పులను వలస పోవడం

```shell
       python3 manage.py makemigrations
```

```shell
       python3 manage.py migrate
```

- ఫ్రంట్ ఎండ్ ఫోల్డర్ కు నావిగేట్ చేయండి
- ఆపై ఎన్పీఎంను ఇన్స్టాల్ చేయండి

```shell
       cd frontend
```

```shell
      npm install
```

- ఫైళ్లను నిర్మించు
- తరువాత రూట్ డైరెక్టరీకి తిరిగి నావిగేట్ చేయండి

```shell
      npm run build
```

```shell
       cd ..
```

- డెవలప్ మెంట్ మోడ్ లో కోడ్ రన్ చేయడం కొరకు దిగువ కమాండ్ ని రన్ చేయండి.
- బ్రౌజర్ లోని అప్లికేషన్ ను వీక్షించడానికి మరియు పరీక్షించడానికి [http://127.0.0.1:8000/](http://127.0.0.1:8000/) తెరవండి

```shell
       python manage.py runserver
```

# EmailJS

[https://dashboard.emailjs.com/sign-up]:
క్లయింట్-సైడ్ టెక్నాలజీలను ఉపయోగించి మాత్రమే ఇమెయిల్లను పంపండి. సర్వర్ అవసరం లేదు. మొదట, ఉచిత ఖాతాను సృష్టించడానికి మరియు క్రింది వాటిని భర్తీ చేయడానికి మీ స్వంత డేటాను పొందండి పైన ఉన్న లింక్ను ఉపయోగించండి:
'SERVICE ID', 'TEMPLATE ID', 'User ID'

# project1\frontend\src\general\ContactUs.tsx

emailjs
.sendForm(
"service_v9n4dyx",
"template_bfro6dg",
form.current,
"kNN4y37J6-A9XlG31"

# Commerce.js

మీరు పని చేయడానికి కొన్ని ఉత్పత్తి డేటాను కలిగి ఉండటానికి, మేము డెమో వ్యాపారి పబ్లిక్ కీని అందించాము.
[https://dashboard.chec.io/signup]
మీ API క్రెడెన్షియల్స్ పొందడం కొరకు మీరు మొదట ఒక ఖాతాను సృష్టించాల్సి ఉంటుంది. పై లింక్ ఉపయోగించి ఖాతా కోసం సైన్ అప్ చేయండి. మీరు జనరేట్ చేసిన పబ్లిక్ మరియు సీక్రెట్ కీలను పొందడం కొరకు దిగువ చూపించిన విధంగా సెట్టింగ్ ల కింద డెవలపర్ సెక్షన్ కు నావిగేట్ చేయండి. ఫైలులో డెమో పబ్లిక్ కీని మీ స్వంతంతో రీప్లేస్ చేయండి [.env].
[https://dashboard.chec.io/settings/developer]

# project1\frontend\.env

REACT_APP_CHEC_PUBLIC_KEY=pk_184625ed86f36703d7d233bcf6d519a4f9398f20048ec

# Supabase Comments Extension

[https://app.supabase.io/]
పైన లింక్కు వెళ్లి ఒక డేటాబేస్ తయారు - ఇది సాధారణ మరియు కొన్ని నిమిషాలు పడుతుంది. అప్పుడు గత కధంలో మీ కనెక్షన్ స్ట్రింగ్ను కలిగి ఉన్న కమాండ్తో కొన్ని పట్టికలు జోడించండి. మీరు డాష్బోర్డ్లో మీ కనెక్షన్ స్ట్రింగ్ను కనుగొనవచ్చు:
[https://app.supabase.io/project/PUT-YOUR-PROJECT-ID-HERE/settings/database]

npx supabase-comments-extension run-migrations <postgres://postgres:some-made-up-password@db.ddziybrgjepxqpsflsiv.supabase.co:5432/postgres

# PayPal

[https://paypal.com/]
మొదట, పేపాల్ ఖాతాను సృష్టించడానికి పైన ఉన్న లింక్కు వెళ్లండి. ఒకసారి మీ అవసరాలకు మీ పేరెంట్ - మీ చెల్లింపులను పొందడానికి దిగువ పేపాల్ డెవలపర్ స్క్రీన్కు అధికారం. మీ ఖాతాదారుడి మీ ఖాతాకు మీ దరఖాస్తును కనెక్ట్ చేయడానికి PayPal ఉపయోగాలు మీ క్లయింట్ ID ని ఉపయోగించినప్పుడు మీరు మీ ఇమెయిల్ శాఖను తనిఖీ చేసే ఇమెయిల్ చిరునామాగా ఉంటుంది. మీ స్వంత భర్తీ. [https://developer.paypal.com/developer/applications/]

# project1\frontend\src\paypalPayment\constants\clientID.ts

export const PAYPAL_CLIENT_ID = {
clientId:
"ARKjojd867g46kvryMoHyd3-Amteqpbuhtxw6WyP6EF0oW2HlKheCc9uFq_gKhaTYn9pJ77rMqlXsjEb",
};

# Turkish tr

# Amaç, Reaktj'ler, bir yerden ve python'a tepki, bir masaüstü ve web uygulamaları oluşturmaktır. Bu webapp, Django'yu kullanır ve Tiplercript ve Tailwind CSS ile reaksiyona girer. Şunları içerecek:

# Portfolyo Uygulaması

# A Notlar Uygulaması

# A Yapılacaklar Uygulaması

# A CommerceJS Uygulaması

# Bir Hava Durumu Uygulaması

# A Müşteri İlişkileri Yönetimi Uygulaması

# Önemli bölümler ve bileşenler şunları içerecektir:

# Sosyal giriş

# Yorum bölümü

# E-postaJS

# PayPal ve Stripe entegrasyonları

# Uluslararasılaşma

# Kullanılan Araçlar

Ön uç: ReactJS, TailwindCSS, Typescript
Arka uç: Django, Django REST Framework

# Kod Kullanımı

- şablonun sıkıştırmasını açın
- veya

- Depoyu klonla
- Ortamınızı oluşturun
- Ardından ortamınızı etkinleştirin

```shell
      python -m venv env
```

```shell
      source env/bin/activate
```

- Gereksinimler.txt dosyasını içeren [project1] temel klasörüne gidin.
- Sonra tüm gereksinimleri yükleyin

```shell
       cd project1
```

```shell
      pip install -r requirements.txt
```

- Taşıma işlemleri yapma
- Sonra değişiklikleri taşı

```shell
       python3 manage.py makemigrations
```

```shell
       python3 manage.py migrate
```

- Ön uç klasörüne gidin
- Sonra npm yükleyin

```shell
       cd frontend
```

```shell
      npm install
```

- Dosyaları oluşturma
- Ardından kök dizine geri dönün

```shell
      npm run build
```

```shell
       cd ..
```

- Kodu geliştirme modunda çalıştırmak için aşağıdaki komutu çalıştırın
- Ardından uygulamayı tarayıcıda görüntülemek ve test etmek için [http://127.0.0.1:8000/](http://127.0.0.1:8000/) açın

```shell
       python manage.py runserver
```

# EmailJS

[https://dashboard.emailjs.com/sign-up]:
Yalnızca istemci taraflı teknolojileri kullanarak e-postaları gönderin. Sunucu gerekmez. Önce, ücretsiz bir hesap oluşturmak için aşağıdaki bağlantıyı kullanın ve aşağıdakileri değiştirmek için kendi verilerinizi alın:
'SERVICE ID', 'TEMPLATE ID', 'User ID'

# project1\frontend\src\general\ContactUs.tsx

emailjs
.sendForm(
"service_v9n4dyx",
"template_bfro6dg",
form.current,
"kNN4y37J6-A9XlG31"

# Commerce.js

Birinci sınıf verilerinizi çalıştırmak için, bir demo tüccar ortak anahtarını sağladık.
[https://dashboard.chec.io/signup]
API kimlik bilgilerinizi almak için öncelikle bir hesap oluşturmanız gerekir. Yukarıdaki bağlantıyı kullanarak bir hesaba kaydolun. Oluşturduğunuz ortak ve gizli anahtarları edinmek için aşağıda gösterildiği gibi ayarlar altındaki geliştirici bölümüne gidin. Demo ortak anahtarını dosyadaki kendinizinkiyle değiştirin [.env].
[https://dashboard.chec.io/settings/developer]

# project1\frontend\.env

REACT_APP_CHEC_PUBLIC_KEY=pk_184625ed86f36703d7d233bcf6d519a4f9398f20048ec

# Supabase Comments Extension

[https://app.supabase.io/]
Yukarıdaki bağlantıya gidin ve bir veritabanı yapın - basittir ve birkaç dakika sürer. Ardından, komut ile bağlantıyı dizisi olan son komponun içerisindeki birkaç tabloyu ekleyin. Bağlantı dizgenizi gösterge tablosunda bulabilirsiniz:
[https://app.supabase.io/project/PUT-YOUR-PROJECT-ID-HERE/settings/database]

npx supabase-comments-extension run-migrations <postgres://postgres:some-made-up-password@db.ddziybrgjepxqpsflsiv.supabase.co:5432/postgres

# PayPal

[https://paypal.com/]
Önce, bir PayPal hesabı oluşturmak için yukarıdaki bağlantıya gidin. Bir kez yapıldıktan sonra, kimlik bilgilerinizi almak için aşağıdaki PayPal Geliştirici ekranına başlayın - ClientId. Sandbox hesabınız, başvuru sahibi paypal hesabınıza bağlamak için, PayPal'in kullandığı şey, ödeme talimatları yaparken test ödemelerinizi kullanabilecekleri bir e-posta adresidir. Kendi ile değiştirin. [https://developer.paypal.com/developer/applications/]

# project1\frontend\src\paypalPayment\constants\clientID.ts

export const PAYPAL_CLIENT_ID = {
clientId:
"ARKjojd867g46kvryMoHyd3-Amteqpbuhtxw6WyP6EF0oW2HlKheCc9uFq_gKhaTYn9pJ77rMqlXsjEb",
};

# Urdu ur

# مقصد یہ ہے کہ REVICJ کے ساتھ کئی موبائل، ڈیسک ٹاپ اور ویب اطلاقات کی تعمیر، مقامی اور پادری کا رد عمل ہے. یہ ویبپ DJAGO کا استعمال کرتا ہے اور کس طرح Pracescript اور TailWind CSS کے ساتھ رد عمل کرتا ہے. اس میں شامل ہوں گے:

# ایک پورٹ فولیو ایپلی کیشن

# ایک نوٹ درخواست

# ایک کرنے کے لئے درخواست

# ایک کامرس جے ایس درخواست

# ایک موسم کی درخواست

# کسٹمر ریلیشنز مینجمنٹ ایپلی کیشن

# اہم حصوں اور اجزاء میں شامل ہوں گے:

# سوشل لاگ ان

# تبصرہ سیکشن

# ای میل جے ایس

# PayPal اور دھاری انضمام

# بین الاقوامیت

# استعمال شدہ اوزار

فرنٹ اینڈ: ری ایکٹرکٹ جے ایس، ٹیل ونڈ سی ایس ایس، ٹائپ سکرپٹ
بیک اینڈ: ڈیجنگو، ڈیجنگو ریسٹ فریم ورک

# کوڈ استعمال

- سانچے کو کھولیں
- یا
- ذخیرے کلون
- اپنا ماحول بنائیں
- پھر اپنے ماحول کو فعال کریں

```shell
      python -m venv env
```

```shell
      source env/bin/activate
```

- [پروجیکٹ1] بنیادی پوشہ پر گشت کریں جو ضروریات .txt مسل پر مشتمل ہے۔
- پھر تمام ضروریات تنصیب کریں

```shell
       cd project1
```

```shell
      pip install -r requirements.txt
```

- ہجرت یں کریں
- پھر نقل مکانی تبدیلیاں

```shell
       python3 manage.py makemigrations
```

```shell
       python3 manage.py migrate
```

- فرنٹ اینڈ فولڈر پر نیوی گیٹ کریں
- پھر این پی ایم انسٹال کریں

```shell
       cd frontend
```

```shell
      npm install
```

- مسلیں بنائیں
- پھر جڑ ڈائریکٹری میں واپس نیوی گیٹ

```shell
      npm run build
```

```shell
       cd ..
```

- ترقیاتی موڈ میں کوڈ چلانے کے لیے نیچے کمانڈ چلائیں
- پھر براؤزر میں ایپلی کیشن دیکھنے اور جانچنے کے لیے [http://127.0.0.1:8000/](http://127.0.0.1:8000/) کھولیں۔

```shell
       python manage.py runserver
```

# EmailJS

[https://dashboard.emailjs.com/sign-up]:
صرف کلائنٹ سائڈ ٹیکنالوجیز کا استعمال کرتے ہوئے ای میل بھیجیں. کوئی سرور کی ضرورت نہیں ہے. سب سے پہلے، مفت اکاؤنٹ بنانے کے لئے مندرجہ بالا لنک کا استعمال کریں اور مندرجہ ذیل کو تبدیل کرنے کیلئے اپنا ڈیٹا حاصل کریں:
'SERVICE ID', 'TEMPLATE ID', 'User ID'

# project1\frontend\src\general\ContactUs.tsx

emailjs
.sendForm(
"service_v9n4dyx",
"template_bfro6dg",
form.current,
"kNN4y37J6-A9XlG31"

# Commerce.js

اس بات کا یقین کرنے کے لئے کہ آپ کے ساتھ کام کرنے کے لئے کچھ پروڈکٹ کا ڈیٹا ہے، ہم نے ایک ڈیمو مرچنٹ عوامی کلیدی فراہم کی.
[https://dashboard.chec.io/signup]
آپ کو سب سے پہلے اپنی اے پی آئی اسناد حاصل کرنے کے لئے اکاؤنٹ بنانے کی ضرورت ہوگی۔ اوپر لنک استعمال کرتے ہوئے اکاؤنٹ کے لیے سائن اپ کریں۔ اپنی پیدا کردہ عوامی اور خفیہ کلیدیں حاصل کرنے کے لئے نیچے دکھائے گئے سیٹنگوں کے تحت ڈویلپر سیکشن پر گشت کریں۔ مسل میں ڈیمو پبلک کلید کو اپنی کلید سے بدلیں [.env].
[https://dashboard.chec.io/settings/developer]

# project1\frontend\.env

REACT_APP_CHEC_PUBLIC_KEY=pk_184625ed86f36703d7d233bcf6d519a4f9398f20048ec

# Supabase Comments Extension

[https://app.supabase.io/]
مندرجہ بالا لنک پر جائیں اور ڈیٹا بیس بنائیں - یہ آسان ہے اور چند منٹ لگتے ہیں. اس کے بعد چند درجے کے نیچے کچھ ٹیبل شامل کریں جس میں آپ کا کنکشن STRING آخری حصہ کے طور پر شامل ہے. آپ ڈیش بورڈ پر اپنا کنکشن STRING تلاش کرسکتے ہیں:
[https://app.supabase.io/project/PUT-YOUR-PROJECT-ID-HERE/settings/database]

npx supabase-comments-extension run-migrations <postgres://postgres:some-made-up-password@db.ddziybrgjepxqpsflsiv.supabase.co:5432/postgres

# PayPal

[https://paypal.com/]
سب سے پہلے، ایک پے پال اکاؤنٹ بنانے کے لئے مندرجہ بالا لنک پر جائیں. ایک بار کیا، آپ کے گاہک کو حاصل کرنے کے لئے ذیل میں پے پال ڈویلپر اسکرین کے سربراہ - آپ کے گاہک کی طرف سے. آپ کے سینڈ باکس باکس ایک ای میل ایڈریس ہو گا کہ آپ ٹیسٹ کی ادائیگی کرنے کے لئے استعمال کرسکتے ہیں جبکہ آپ کے کلائنٹ کی شناخت ہے جو آپ کے پلے پال اکاؤنٹ میں آپ کی درخواست سے منسلک کرنے کے لئے پے پال کا استعمال کرتا ہے. اپنے آپ کے ساتھ تبدیل کریں. [https://developer.paypal.com/developer/applications/]

# project1\frontend\src\paypalPayment\constants\clientID.ts

export const PAYPAL_CLIENT_ID = {
clientId:
"ARKjojd867g46kvryMoHyd3-Amteqpbuhtxw6WyP6EF0oW2HlKheCc9uFq_gKhaTYn9pJ77rMqlXsjEb",
};
