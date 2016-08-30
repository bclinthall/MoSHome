//Methods to know
var methods = [
["finalize", "protected void finalize()"],
["array sort", "static void Arrays.sort()"],
["array search", "static int Arrays.binarySearch(Object[], Object key); //or replace 'Object' with a primitive'"],
["array to list", "static <T> List<T> Arrays.asList(T... a)"],
["list sort", "static void	Collections.sort(List<T> list)"],
["list search", "static <T> int	Collections.binarySearch(List<T> list, T key)"],
["list to array", "Object[]	toArray() <br> <T> T[]	toArray(T[] a) <br>Note, no helper class"],
["number of items in array", "public final int length<br>note, this is a field, not a method."],
["number of items in list", "int	size()"],
["Array.equals", "looks for same object reference"],
["List.equals", "calls equals() on each item in order"],
[
"StringBuilder constructor", "StringBuilder()<br>"
	+ "StringBuilder(CharSequence seq)<br>" 
	+ "StringBuilder(int capacity)"],
[
"StringBuilder.append", "StringBuilder append(Object obj)"],
["StringBuilder.charAt", "char	charAt(int index)"],
["StringBuilder.delete", "StringBuilder	delete(int start, int end)"],
["StringBuilder.deleteCharAt", "StringBuilder	deleteCharAt(int index)"],
["StringBuilder.indexOf", "int	indexOf(String str[, int fromIndex])"],
["StringBuilder.insert", "StringBuilder	insert(int offset, Object obj)"],
["number of characters in  StringBuilder", "int	length()"],
["StringBuilder.reverse", "StringBuilder	reverse()"],
["StringBuilder.setCharAt", "void	setCharAt(int index, char ch)"],
["StringBuilder.substring", "String	substring(int start[, int end])"],
["StringBuilder.toString", "String	toString()"],
["StringBuilder.equals", "looks for same object reference"],
["String.charAt", "char	charAt(int index)"],
["String.concat", "String	concat(String str)"],
["String.endsWith", "boolean	endsWith(String suffix)"],
["String.equals", "looks at characters"],
["String.equalsIgnoreCase", "boolean	equalsIgnoreCase(String anotherString)"],
["String.indexOf", "int	indexOf(String str[, int fromIndex])"],
["number of characters in String", "int	length()"],
["String.replace", "String	replace(CharSequence target, CharSequence replacement)"],
["String.startsWith", "boolean	startsWith(String prefix)"],
["String.substring", "String	substring(int beginIndex[, int endIndex])"],
["String.toLowerCase", "String	toLowerCase()"],
["String.toUpperCase", "String	toUpperCase()"],
["String.trim","String	trim()"]
]