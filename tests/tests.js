var assert = chai.assert;

suite('Javascript Lexer', function() {
    test('Asignacion, Funcion tokens', function() {
		 var input = "var a = b;";
		 var resultado = JSON.stringify(input.tokens());
		  var esperado = "[{\"type\":\"name\",\"value\":\"var\",\"from\":0,\"to\":3},{\"type\":\"name\",\"value\":\"a\",\"from\":4,\"to\":5},{\"type\":\"operator\",\"value\":\"=\",\"from\":6,\"to\":7},{\"type\":\"name\",\"value\":\"b\",\"from\":8,\"to\":9},{\"type\":\"operator\",\"value\":\";\",\"from\":9,\"to\":10}]";
		  
        assert.deepEqual();
    });
//      test(';Comentario', function() {
//          var s = ";Comentario";
// 		   var t = lexer(s);
// 			var c = t[0].match;
//          assert.equal(c[0], ';Comentario');
// 			assert.equal(c[1], 'Comentario');
//      });
// 	  test('Nombre = Valor', function() {
// 		  var s = "Nombre = Gonzalo";
// 		  var t = lexer(s);
// 		  var m = t[0].match;
// 		  assert.equal(t[0].type, 'nameEqualValue');
// 		  assert.equal(m[0], 'Nombre = Gonzalo');
// 		  assert.equal(m[1], 'Nombre ');
// 		  assert.equal(m[2], ' Gonzalo');
// 	  });
//      test('Error!', function() {
// 		   var s = "Esto es un error";
// 		   var t = lexer(s);
//          assert.match(t[0].type, /error/);
//      });
});