if [ $# -eq 0 ]
then
	echo No arguments supplied
	exit
fi

for var in "$@"
do
	mkdir ex"$var"
done
