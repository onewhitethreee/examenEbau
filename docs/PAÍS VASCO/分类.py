import os

def main():
    for root, dirs, files in os.walk('PAÍS VASCO/asignatura/'):
        #print(files)
        for filess in files:
            with open('PAÍS VASCO/asignatura/'+filess, 'w+', encoding='utf-8') as f:
                f.write('---\n')
                f.write('slug: ' + 'PAÍS VASCO/' + filess.split('.')[0]+'\n')
                f.write('description: TODOS ENEXAMENS DE EBAU DE PAÍS VASCO'+'\n')
                f.write('keywords:' + '\n' + ' - ' + 'PAÍS VASCO' + '\n' + ' - ' + 'EXAMEN' + '\n' + ' - ' + 'EBAU' + '\n' + ' - ' + filess.split('.')[0] + '\n')
                f.write('---\n')
                str_ = '## EXAMEN EBAU DE ' + filess.split('.')[0] + ' DE PAÍS VASCO'
                f.write(str_.upper() + '\n')
            '''---
                    id: examen-PAÍS VASCO
                    title: examen ebau de PAÍS VASCO
                    slug: /PAÍS VASCO/
                    description: TODAS EXAMENES DE EBAU DE PAÍS VASCO
                    keywords:
                    - PAÍS VASCO
                    - EXAMEN
                    - EBAU
                ---'''
if __name__ == '__main__':
    main()