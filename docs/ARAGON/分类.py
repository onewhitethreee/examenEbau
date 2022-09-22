import os

def main():
    for root, dirs, files in os.walk('ARAGON/asignatura/'):
        #print(files)
        for filess in files:
            with open('ARAGON/asignatura/'+filess, 'w+', encoding='utf-8') as f:
                f.write('---\n')
                f.write('slug: ' + 'ARAGON/' + filess.split('.')[0]+'\n')
                f.write('description: TODOS ENEXAMENS DE EBAU DE ARAGON'+'\n')
                f.write('keywords:' + '\n' + ' - ' + 'ARAGON' + '\n' + ' - ' + 'EXAMEN' + '\n' + ' - ' + 'EBAU' + '\n' + ' - ' + filess.split('.')[0] + '\n')
                f.write('---\n')
                str_ = '## EXAMEN EBAU DE ' + filess.split('.')[0] + ' DE ARAGON'
                f.write(str_.upper() + '\n')
            '''---
                    id: examen-ARAGON
                    title: examen ebau de ARAGON
                    slug: /ARAGON/
                    description: TODAS EXAMENES DE EBAU DE ARAGON
                    keywords:
                    - ARAGON
                    - EXAMEN
                    - EBAU
                ---'''
if __name__ == '__main__':
    main()