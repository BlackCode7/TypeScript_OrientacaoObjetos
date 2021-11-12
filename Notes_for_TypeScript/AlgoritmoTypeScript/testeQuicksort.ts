/*
Quicksort is an in-place sorting algorithm. Developed by British computer 
scientist Tony Hoare in 1959[1] and published in 1961,[2] it is still a 
commonly used algorithm for sorting. When implemented well, it can be somewhat 
faster than merge sort and about two or three times faster than heapsort.
[3][contradictory] Quicksort is a divide-and-conquer algorithm. It works
by selecting a 'pivot' element from the array and partitioning the other 
elements into two sub-arrays, according to whether they are less than or 
greater than the pivot. For this reason, it is sometimes called 
partition-exchange sort.[4] The sub-arrays are then sorted recursively. 
This can be done in-place, requiring small additional amounts of memory 
to perform the sorting. Quicksort is a comparison sort, meaning that it 
can sort items of any type for which a "less-than" relation (formally, a 
total order) is defined. Efficient implementations of Quicksort are 
not a stable sort, meaning that the relative order of equal sort items 
is not preserved.
Mathematical analysis of quicksort shows that, on average, the algorithm 
takes O(n log n) comparisons to sort n items. In the worst case, it makes 
O(n2) comparisons.
***************************************************************************************

O Quicksort é um algoritmo de classificação no local. Desenvolvido pelo 
cientista informático britânico Tony Hoare em 1959[1] e publicado em 1961[2], 
ainda é um algoritmo comumente usado para a classificação. Quando bem implementado, 
ele pode ser um pouco mais rápido do que a classificação por fusão e cerca de 
duas ou três vezes mais rápido do que o heapsort[3][contraditório].
O Quicksort é um algoritmo de divisão e conquista. Ele funciona selecionando 
um elemento 'pivot' da matriz e dividindo os outros elementos em dois 
sub-arranjos, de acordo se eles são menores ou maiores que o pivot. Por 
esta razão, às vezes é chamado de tipo de troca de partições[4]. Os subarrays 
são então classificados recursivamente. Isto pode ser feito no local, exigindo 
pequenas quantidades adicionais de memória para realizar a ordenação.
Quicksort é um tipo de comparação, o que significa que pode classificar 
itens de qualquer tipo para os quais uma relação "menos que" (formalmente, 
uma ordem total) é definida. Implementações eficientes de Quicksort não 
são uma classificação estável, o que significa que a ordem relativa de 
itens de classificação igual não é preservada.
A análise matemática do quicksort mostra que, em média, o algoritmo leva
comparações de O(n log n) para ordenar n itens. No pior dos casos, ele faz 
comparações O(n2).

*/


import {QuickSort} from './Quicksort'

let arry1:number[] = [12,54,96,666,10];


console.log('Unsorted',arry1);

let sorter:QuickSort = new QuickSort();
    sorter.sort(arry1);

console.log('Sorted',arry1);
