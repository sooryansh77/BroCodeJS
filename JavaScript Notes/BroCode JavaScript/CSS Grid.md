![[Pasted image 20250904181708.png|534x634]]

Grids are 2D, we can place things on them horizontally and vertically and both simultanously

Each numbers are line, 
each square is a cell

.container{
	display: grid;
	 grid-template-rows: 100px 100px 100px //three rows. OR repeat(3, 100px)
	 grid-template-columns; 100px 100px 100px //three columns OR repeat(3, 100px)
	 
}

to place items inside the grid.
select item and assign
grid-row-start: 
grid-row-end:
grid-column-start:
grid-column-end: 

.item-1{
	grid-row-start: 1;  
	grid-row-end: 3;
	grid-column-start: 1;
	grid-column-end: 5;
}

![[image-1.png]]

short-hand properties

.item-1{
	grid-row: 1 / 3;  (row-start / row-end)
	grid-column: 1 / 5; (column-start / column-end)
}

.item-2{
	grid-row: span 2;  (span keyword automatically spans the element from its current position to the place you give. (2))
	 grid-column: span 2;
}

Even faster property

.item-3 {
	grid-area: row-start col-start row-end col-end
	grid-area: 3 / 1 / 7 / 7;
}

![[image-2.png]]

also can use -ve indexing.

grid-area: 3 / 1 / -1 / -1

LAYERING

.item-1{
	grid-row: 1 / 3;
	grid-column: 1 / 5;
}

.item-2{
	grid-area: 2 / 4 / 4 / 6
	 z-index: 1;
}

![[image-4.png]]

Implicit Rows/Columns, 
if new element is added, grid automatically adds a row.

grid-auto-rows: 100px (tells grid to add new rows of 100px if needed by extra element.)

By default, grid adds row, we can change it add column instead by = 
grid-auto-flow: column; 

**Fractional unit (fr)**
grid-template-columns: 100px 2fr 1fr;
grid-template-rows: repeat(2, 100px);

![[image-5.png|448x156]]

minmax(100px, 3fr) / stop shrinking below 100px and expanding above 3fr

grid gap: 2px 3px (row col);

grid-template-areas:

    'header header'

    'main aside'

    'footer footer';

``` javascript
*{

    box-sizing: border-box;

}

#container{

    display: grid;

    grid-template-rows: 100px 300px 100px;

    grid-template-columns: 1fr 3fr;

    grid-template-areas:

    'header header'

    'main aside'

    'footer footer';

}

  
  

#box1, #box2, #box3, #box4{

    background-color: lightpink;

    border: 5px solid palevioletred;

    font-size: 1.5rem;

}

  

#box1{

    grid-area: header;

}

  

#box2{

    grid-area: main;

}

  

#box3{

    grid-area: aside;

}

  

#box4{

    grid-area: footer;

}
```

![[image-6.png]]

you can use this names to assign items to their places.

justify-items & align-items

justify-self & align-self

justify content & align-content

