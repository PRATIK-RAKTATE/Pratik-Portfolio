## Summary

You asked for a compact version. Here is the clean interview-ready summary separating **technology**, **language**, **tool**, and **login methods**.

---

# 1. Tools vs Technology vs Language

| Name            | Category            | Purpose                        |
| --------------- | ------------------- | ------------------------------ |
| MySQL           | Database Technology | Relational database (tables)   |
| MongoDB         | Database Technology | NoSQL document database        |
| SQL             | Language            | Query relational databases     |
| PL/SQL          | Language            | Oracle procedural SQL language |
| MongoDB Compass | Tool (GUI)          | Manage MongoDB visually        |
| SQL*Plus        | Tool (CLI)          | Connect/manage Oracle DB       |

---

# 2. What Stores Data?

### Database Engines

These actually store data:

* MySQL
* MongoDB
* Oracle Database

---

# 3. Query Languages

### SQL

Used in:

* MySQL
* Oracle
* PostgreSQL
* SQL Server

Example:

```sql
SELECT * FROM users;
```

### PL/SQL

Used only in Oracle.

Adds:

* loops
* variables
* procedures
* exception handling

Example:

```sql
BEGIN
 DBMS_OUTPUT.PUT_LINE('Hello');
END;
/
```

---

# 4. Login / Connect to Each

# MySQL

### CLI Login

```bash
mysql -u root -p
```

### Remote

```bash
mysql -h localhost -P 3306 -u root -p
```

---

# MongoDB

### CLI Login

```bash
mongosh
```

### With Auth

```bash
mongosh "mongodb://user:pass@localhost:27017"
```

---

# MongoDB Compass

Use connection string:

```text
mongodb://localhost:27017
```

or

```text
mongodb+srv://user:pass@cluster.mongodb.net
```

---

# Oracle SQL*Plus

### Normal Login

```bash
sqlplus hr/hr@localhost:1521/XEPDB1
```

### Admin Login

```bash
sqlplus sys/password as sysdba
```

---

# 5. What is `AS SYSDBA`

### Oracle Only

Special admin privilege used for:

* startup database
* shutdown database
* recovery
* full administration

Example:

```bash
sqlplus / as sysdba
```

or

```bash
sqlplus sys/password as sysdba
```

### Important

Do **not** use for normal app development.

---

# 6. Important Difference

## Wrong Thinking

* login to SQL
* login to PL/SQL

## Correct Thinking

* login to MySQL
* login to MongoDB
* login to Oracle using SQL*Plus

Then run SQL / PL/SQL.

---

# 7. Easy Memory Trick

* MySQL = relational DB
* MongoDB = document DB
* SQL = query language
* PL/SQL = Oracle programming language
* Compass = MongoDB GUI tool
* SQL*Plus = Oracle CLI tool
* SYSDBA = Oracle admin access

---

# 8. Production Advice

### Never use super admin users in apps

Bad:

* MySQL root
* Oracle SYS
* MongoDB admin

Use limited privilege users.

---

# Final One-Line Summary

**MySQL / MongoDB = databases, SQL / PLSQL = languages, Compass / SQL*Plus = tools, SYSDBA = Oracle admin privilege.**
