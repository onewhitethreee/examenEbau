import os
path = r'./docs'
'''lists = ['ARAGÓN','ANDALUCÍA',"ASTURIAS",
"CANTABRIA","CASTILLA LA MANCHA","CASTILLA Y LEÓN","CATALUÑA","COMUNIDAD VALENCIANA","EXTREMADURA","GALICIA","ISLAS BALEARES","ISLAS CANARIAS","LA RIOJA","MADRID","MURCIA","NAVARRA","PAÍS VASCO",]
for i in lists:
    os.makedirs(path+'/'+'fecha'+'/'+i)'''

lists = ["Lengua", "Matemática","Historia de España","Filosofía","Ingles","Física","Biología","Cultura audiovisual",]
for i in lists:
    filess = os.makedirs(path+'/'+'estudiar'+'/'+i)
    with open (filess, 'w') as f:
        f.write('1.md')
