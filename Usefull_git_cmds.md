### Each person works locally

If different people are updating the website remotely then we should stick to the following procedure

- Either update in different update-branches
- or pull origin main before pushing

```
git add .
git commit -m "Updated faculty section"
```

### Before pushing

Always pull latest remote changes first:

```
git pull origin main
```

If same files were edited by two different people then all conflits will appear and git inserts markers inside the file

### After handling conflit

```
git push origin main
```
