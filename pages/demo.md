---
layout: page
title: שיעור לדוגמא
permalink: /demo/
---

<div markdown="1" class="demo-content">

בואו נגיד שאנחנו רוצים להכין אתר שצריך להירשם אליו. הוא נראה ככה:

![Sign in](https://i.imgur.com/QD1lBsx.png)

בואו נכתוב קצת קוד שנותן למשתמש להיכנס רק אם הוא הכניס גם את שם המשתמש הנכון וגם את הסיסמה הנכונה. בכך אני מתכוון ש:
  1. שם המשתמש שווה ל "ori"
  2. הסיסמה שווה ל "abc"

![Should be equal to username and password](https://i.imgur.com/gZOpVJu.png)

אם אחד מהתנאים האלה לא נמצא, צריך לא לאפשר למשתמש להיכנס. קרימינלי! אך, אם שם המשתמש והסיסמה נכונים, ניתנת להם הגישה. 

> "תנאי" הוא ביטוי מסוים שיכול להיות שווה ל"אמת" או "שקר".

![Flow chart](https://i.imgur.com/4tGdFun.png)

השימוש של זה בעולם האמתי
-----------------------

הדרך שבה השיעור הזה ניגש לבעיה היא קצת שונה מהדרך שמתכנת בעולם האמתי עלול להשתמש. אנחנו עובדים רק אל משתמש אחד, אז אנחנו לא צריכים לדאוג לגבי יצירה, עדכון, או מחיקה של משתמשים. בנוסף, אנחנו לא צריכים לשמור את הסיסמה האופן מאובטח מכיוון שאין דברים חשובים בתוכנה שלנו (עדיין) .


בעיקרון, רק דעו שבמקרה בחיים האמתיים התוכנה עלולה להיות מעט שונה מהתוכנה שאנחנו עומדים לכתוב.

פירוק הבעיה
-----------

הנה רשימה של הדברים שאנחנו צריכים לעשות על מנת שהבעיה תיפתר:

 * לאחסן את שם המשתמש איפשהו בתוכנה
 * לאחסן את הסיסמה איפשהו בתוכנה
 * לתת למשתמש להזין שם משתמש וסיסמה
 * לבדוק ששם המשתמש נכון
 * אם שם המשתמש והסיסמה נכונים, להודיע על כך
 * אם שם המשתמש והסיסמה שגויים, להודיע על כך

אחסון של שם המשתמש והסיסמה
--------------------------

הדבר הראשון שאנחנו צריכים לעשות הוא לשמור את שם המשתמש והסיסמה הנכונים.

<details>
<summary>כיצד אנחנו יכולים לשמור מידע בתוכנה שלנו?</summary>

כבר עברנו על זה בשיעור קודם, אנחנו יכולים להשתמש במשתנים על מנת לאחסן מידע.
בואו נכתוב קצת קוד.

</details>


פתחו את סביבת ההרצה שלכם והקלידו את הקוד הבא

```python
username = # get the input from the user
password = # get the password from the user
```

<details>
<summary>הערה לגבי הקוד</summary>

אנחנו משתמשים ב # על מנת להגיב על הקוד. זה עשוי לעזור לנו לזכור איזה קוד עושה מה, אפילו אם קראנו אותו, נגיד, לפני שלוש שנים.

</details>

עכשיו אתם יכולים לשנות את שם המשתמש והסיסמה לכל דבר שתרצו.

> **הערה:** גם שם המשתמש וגם הסיסמה הם שניהם "מחרוזות". מחרוזת היא פשוט מילה מהודרת לדרך שבה המחשב מאחסן רצף של תווים.

### בדיקת מציאות

בחיים האמתיים, אנחנו כנראה לא נאחסן סיסמאות בצורה הזו. זה לא מאובטח. בנוסף, יוכל להיות לכם משתמש אחד בלבד! לא מאוד טוב אם אתם, נגיד, פייסבוק, שלו יש מיליוני משתמשים. לא נוכל לשמור משתנה עבור כל אחד!

בעולם האמיתי, קיימות מערכות הרבה יותר מסובכות על מנת לאחסן סיסמאות. לא נוכל לדבר על אלו בשיעור הזה.

קבלת הסיסמה מהמשתמש
-------------------

עכשיו, אנחנו נצטרך שהמשתמש יזין שם משתמש וסיסמה. עשינו את זה בעבר, אבל בואו נעשה  תזכורת

אנחנו יכולים להשתמש בפונקציית ה input על מנת לקבל קלט מהמשתמש. נוכל להעביר את זה בתור שאלה (עטופה ב " ") על מנת שהמשתמש ידע מה להזין.

בואו נכתוב את זה כקוד:

<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="n">username</span> <span class="o">=</span> <span class="c1"># get the input from the user
</span><span class="n">password</span> <span class="o">=</span> <span class="c1"># get the password from the user
</span></code></pre></div></div>

<details>
<summary>
הקוד המלא נמצא כאן. לחצו עליי רק אם אתם לא יודעים כיצד למלא את הקוד למעלה!
</summary>

<div class="language-python highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="n">username</span> <span class="o">=</span> <span class="nb">input</span><span class="p">(</span><span class="s">"&lt;your question for the username&gt;"</span><span class="p">)</span>
<span class="n">password</span> <span class="o">=</span> <span class="nb">input</span><span class="p">(</span><span class="s">"&lt;your question for the password&gt;"</span><span class="p">)</span>
</code></pre></div></div>

</details>

בדיקה אם שם המשתמש והסיסמה נכונים
----------------------------------

מה בדיוק אנחנו מתכוונים ב"נכונים"? טוב, שם המשתמש שניתן על ידי המשתמש חייב להיות זהה לשם המשתמש אשר שמור בתוכנה, ואותו הדבר עם הסיסמה.

במילים אחרות:

 * שם המשתמש שניתן על ידי המשתמש = שם המשתמש השמור בתוכנה
 * הסיסמה שניתנה על ידי המשתמש = הסיסמה השמורה בתוכנה

בואו נעשה ניסוי
**פתחו את סביבת ההרצה שלכם, ובתוך הטרמינל הקלידו:**

    "test" == "test"

מה זה אומר?

הטרמינל צריך להחזיר `True`.

בואו ננסה עוד משהו:

    "test" == "egg"

הטרמינל מחזיר `False`.

`True` ו`False` הם ערכים בוליאניים. בוליאנים הם כמו תשובות לשאלות כן ולא.

 * האם test שווה לtest? כן.
 * האם test שווה לegg? לא.

הדרך שבה אנחנו יכולים לתרגם את זה לPython היא על ידי שימוש בסימן ה ==. זה שואל את Python "האם החלק לפני הסימן שווה לחלק אחרי הסימן?".

> **הערה:** אל תתבלבלו בין = ל==. אנחנו משתמשים ב= בשביל משתנים ו== בשביל בוליאנים. אתם תקבלו שגיאת סינטקס אם תתבלבלו בין השניים. אל תלחצו! פשוט תשנו את זה לסימן הנכון.

אנחנו יכולים גם להשתמש במשתנים ב==:

    a = "test"
    a == "test"  # => True
    "test" == a  # => True
    a == a       # => True

אנחנו יכולים גם לבדוק קלטים!

    a = input("enter something")
    a == "test"  # => True

זה מאוד שימושי לבעיה שיש לנו, מפני שאנחנו רוצים לבדוק ששם המשתמש והסיסמה נכונים.

לבסוף, וזה קצת מסובך לתפיסה, אנחנו יכולים להשתמש באופרטורים של הגיון כדי לבצע פעולות על בוליאנים. אופרטור לוקח שני קלטים, ונותן פלט אחד:

    true  AND true  --> true
    false AND true  --> false
    false AND false --> false


(אנחנו פשוט כותבים את המילה and)

מספר דוגמאות:

    True and True  # => True
    True and False # => False
    False and False # => False

עשייה של משהו אם משהו אחר קורה
-------------------------------

הבעיה הבאה שלנו היא לתת למשתמש להיכנס רק אם שם המשתמש והסיסמה נכונים.

ראשית, בואו נגדיר את הבעיה שיש לנו בצורה יותר טובה. אנחנו בעיקרון עובדים לפי
טבלת הזרימה מקודם.

![Flow chart](https://i.imgur.com/4tGdFun.png)


אם שם המשתמש והסיסמה נכונים, תכניס את המשתמש. אחרת, אל תכניס אותו. דרך אחרת לנסח את זה היא:

האם שם המשתמש והסיסמה נכונים?

...שהיא שאלת כן ולא, היא בוליאן!

```python
correct = True / False
```

עכשיו, אנחנו צריכים דרך להריץ את הקוד באופן מותנה. בPython, זה נעשה על ידי שימוש בif.

```python
if something:
  do stuff
```

something חייב להיות בוליאן. אז, בואו ננסה להשתמש בTrue (אמת).

```python
if True:
print("Hello")
```

אם נריץ את זה, נקבל Hello. מה לגבי אם נשנה את True לFalse?

```python
if False:
  print("Hello")
```

כשנריץ את זה, לא נקבל שום דבר. מושלם! מאחר והערך אחרי מילת המפתח if הוא False, הקוד בבלוק לא מורץ. אנחנו בטוח הולכים להשתמש בזה במשימה האחרונה.

עוד כמה דברים
-------------

אנחנו יכולים להוסיף גם בלוק else אשר רץ כשהערך אחרי if הוא False:

```python
if False:
  print("no")
else:
  print("yes")
```

זה יכול להיות שימושי במשימה האחרונה.

הקוד הזה לא שימושי במצב הנוכחי שלנו, בואו נשנה אותו קצת.

משימה אחרונה
------------

|בעיה|פתרון|
|-------|--------|
|אחסון מידע|משתנים|
|קבלת קלט מהמשתמש|`input(question)`|
|בדיקת קלט נכון|`a == b`|
|עשיית דברים כשדברים אחרים נכונים|`if a: b`|

תנסו דברים! תתנסו. אין דבר שיכול להשתבש כאן! אם אתם נתקעים, הרגישו חופשי להסתכל על הרמזים למטה, או לשאול את חבריכם.

<details markdown="1">
<summary>
רמז 1
</summary>

אתם יכולים לבדוק אם שם המשתמש והסיסמה נכונים ככה:

```python
username correct   AND    password correct
```

שזה:

```python
username == username_input and password == password_input
```

</details>

<details markdown="1">
<summary>
רמז 2
</summary>

המתווה הכללי של הפרויקט שלכם צריך להיראות בערך ככה:

```python
# The saved data
username = ...
password = ...
 
# Get user input
username_input = ...
password_input = ...
 
# Check user input matches saved data
if ...:
  print("Logged in")
else ...:
  print("Couldn't log in")
```

(תחליפו עם שאלות אמיתיות)

</details>

<details markdown="1">
<summary>
רמז 3
</summary>
המידע המאוחסן צריך להיראות בערך ככה:

```python
# The saved data
username = "username goes here"
password = "password goes here"
```

(תחליפו עם שם המשתמש והסיסמה שאתם רוצים)
</details>
<details markdown="1">
<summary>
רמז 4
</summary>

קבלה של קלט משתמש נראית ככה:

```python
# Get user input
username_input = input("ask the user for their username")
password_input = input("ask the user for their password")
```
</details>

<details markdown="1">
<summary>
רמז 5
</summary>
הצהרת הif צריכה להיראות ככה:

```python
if (username) and (password:
  print("Logged in")
```

(תחליפו את (username) ו(password) עם בדיקות לראות אם שם המשתמש והסיסמה נכונים)
</details>

<details>
<summary>
רמז 6
</summary>
כדי לבדוק אם שם המשתמש נכון:

<div dir="ltr" markdown="1">
```python
username = "saved username"
username_input = input("ask the user to enter their username")

if username == username_input:
  print("username is correct")
```
</div>

(אותו הרעיון בשביל הסיסמה)
</details>
<details markdown="1">
<summary>
רמז 7
</summary>
כדי לראות אם שם המשתמש והסיסמה נכונים:

```python
if username == username_input and password == password_input:
  print("Logged in")
```
</details>

</div>
