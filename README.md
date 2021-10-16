# Descripsión
La applicación en react registra el nombre que se le escriba en el input para despues mostrarlo en un paragraph, el valor se guarda en el localStorage y no se pierde al actualizar la pagina, mostrando el ultimo nombre que escribio el usuario al hacer refresh.
## Hechos
1 Una app web por default es s t a t e l e s s.
2 Todos aquellos eventos que el usuario no comienza, se consideran e f e c t o s   s e c u n d a r i o s.
3 Para controlar dichos eventos s e c u n d a r i o s se utiliza u s e E f f e c t.
4 Algunas maneras de persistir información son: bases de datos y L o c a l S t o r a g e.
5 Para transformar cualquier tipo de valor en JS a strings, se utiliza JSON.stringify() y para regresar de string al tipo de valor original, se utiliza JSON.p a r s e()