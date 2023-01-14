migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6loxvjadrgj32ao")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pivu3e9v",
    "name": "language",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 36,
      "values": [
        "Java",
        "C++",
        "Python",
        "JavaScript",
        "C#",
        "PHP",
        "Ruby",
        "Perl",
        "Swift",
        "Go",
        "Kotlin",
        "Scala",
        "R",
        "Bash",
        "Rust",
        "Objective-C",
        "React",
        "Angular",
        "Vue",
        "Ember",
        "Svelte",
        "C",
        "Cobol",
        "Fortran",
        "Lisp",
        "Pascal",
        "SQL",
        "TypeScript",
        "Elixir",
        "Erlang",
        "Julia",
        "Haskell",
        "Clojure",
        "OCaml",
        "F#",
        "WebAssembly"
      ]
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wlhymfs4",
    "name": "tags",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": null,
      "collectionId": "jxen6ns16o2rsvj",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6loxvjadrgj32ao")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pivu3e9v",
    "name": "language",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 5,
      "values": [
        "Java",
        "C++",
        "Python",
        "JavaScript",
        "C#",
        "PHP",
        "Ruby",
        "Perl",
        "Swift",
        "Go",
        "Kotlin",
        "Scala",
        "R",
        "Bash",
        "Rust",
        "Objective-C",
        "React",
        "Angular",
        "Vue",
        "Ember",
        "Svelte",
        "C",
        "Cobol",
        "Fortran",
        "Lisp",
        "Pascal",
        "SQL",
        "TypeScript",
        "Elixir",
        "Erlang",
        "Julia",
        "Haskell",
        "Clojure",
        "OCaml",
        "F#",
        "WebAssembly"
      ]
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wlhymfs4",
    "name": "tags",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 10,
      "collectionId": "jxen6ns16o2rsvj",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
})
