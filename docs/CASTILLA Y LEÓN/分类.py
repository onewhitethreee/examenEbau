import os

def main():
    for root, dirs, files in os.walk('CASTILLA Y LEÓN/asignatura/'):
        #print(files)
        for filess in files:
            with open('CASTILLA Y LEÓN/asignatura/'+filess, 'w+', encoding='utf-8') as f:
                f.write('---\n')
                f.write('slug: ' + 'CASTILLA Y LEÓN/' + filess.split('.')[0]+'\n')
                f.write('description: TODOS ENEXAMENS DE EBAU DE CASTILLA Y LEÓN'+'\n')
                f.write('keywords:' + '\n' + ' - ' + 'CASTILLA Y LEÓN' + '\n' + ' - ' + 'EXAMEN' + '\n' + ' - ' + 'EBAU' + '\n' + ' - ' + filess.split('.')[0] + '\n')
                f.write('---\n')
                str_ = '## EXAMEN EBAU DE ' + filess.split('.')[0] + ' DE CASTILLA Y LEÓN'
                f.write(str_.upper() + '\n')
            '''---
                    id: examen-CASTILLA Y LEÓN
                    title: examen ebau de CASTILLA Y LEÓN
                    slug: /CASTILLA Y LEÓN/
                    description: TODAS EXAMENES DE EBAU DE CASTILLA Y LEÓN
                    keywords:
                    - CASTILLA Y LEÓN
                    - EXAMEN
                    - EBAU
                ---'''
if __name__ == '__main__':
    main()