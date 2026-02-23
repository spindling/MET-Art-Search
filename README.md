# Web application 
Implements NodeJS backend, front-end incorporating AJAX, and third-party Web API

## Start
Run node server.js to launch the app. 
 
## Functionality
### Search the MET Museum Collection:
Enter a keyword such as "sunflowers" or "red" into the "Search" form. 
Choose whether the artworks should be part of the MET's permanent collection.
Choose the artwork medium and click "Submit Request".
The app will display the first 5 results and the number of total results.

e.g.

Search: Vincent Van Gogh  
Permanent Collection?: [x]  
Choose the medium of the artwork: Painting  
-> Results:  
```
Total results: 24
First 5 Object IDs:

    436535
    436528
    436532
    459123
    895906

```

### Display information for an object:
Enter the Object ID (obtained above) and click "Get Info".  
e.g Object ID: 436535  
-> Results:  
```
Title: Wheat Field with Cypresses
Artist: Vincent van Gogh
Bio: Dutch, Zundert 1853–1890 Auvers-sur-Oise
Medium: Oil on canvas
```
An available image of the artwork is also displayed.  
