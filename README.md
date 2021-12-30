# Phil Dunphy Quotes API

The guy has some good dialogues, and I was bored.


## API Reference

#### Get a random quote

```http
  GET /
```
#### Get all quotes

```http
  GET /all
```

## Example Usage

```bash
    $ curl https://phil-dunphy-quotes-api.herokuapp.com
```
```json
    {
        "message":
        {
            "id":5,
            "quote":"When life gives you lemonade, make lemons. Life will be all, ‘Whaaat?"}
        }
    }
```

## License

[MIT](LICENSE)