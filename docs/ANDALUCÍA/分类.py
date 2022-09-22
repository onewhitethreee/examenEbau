import os

def main():
    for root, dirs, files in os.walk('ANDALUCÍA/asignatura/'):
        #print(files)
        for filess in files:
            with open('ANDALUCÍA/asignatura/'+filess, 'w+', encoding='utf-8') as f:
                f.write('---\n')
                f.write('slug: ' + 'ANDALUCIA/' + filess.split('.')[0]+'\n')
                f.write('description: TODOS ENEXAMENS DE EBAU DE ANDALUCIA'+'\n')
                f.write('keywords:' + '\n' + ' - ' + 'ANDALUCIA' + '\n' + ' - ' + 'EXAMEN' + '\n' + ' - ' + 'EBAU' + '\n' + ' - ' + filess.split('.')[0] + '\n')
                f.write('---\n')
                str_ = '## EXAMEN EBAU DE ' + filess.split('.')[0] + ' DE ANDALUCIA'
                f.write(str_.upper() + '\n')
            '''---
                    id: examen-ANDALUCIA
                    title: examen ebau de ANDALUCIA
                    slug: /ANDALUCIA/
                    description: TODAS EXAMENES DE EBAU DE ANDALUCIA
                    keywords:
                    - ANDALUCIA
                    - EXAMEN
                    - EBAU
                ---'''
if __name__ == '__main__':
    main()