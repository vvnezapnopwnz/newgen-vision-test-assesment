# newgen-vision-test-assesment
Алгоритм фильтра:
Обход всех объектов в массиве, сравнение цен курсов в диапазане От указанной цены и До и переданных параметров запрашиваемого диапазона цен. 
Если цены курсов проходят условия фильтрации, то они попадают в результирующий массив курсов.
Сортировка:
Имеются два вида сортировки, по возрастанию(установлен по умолчани) и по убыванию: в тестах есть 2 кейса.
Использование

Установите зависимости в локальную папку node_modules.

npm install

Затем используйте следующую команду, чтобы проверить, правильно ли работают функции фильтрации и сортировки.

npm test
