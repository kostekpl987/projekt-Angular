# Game

Komponent Main:

W Komponencie Main znajduje się kolejny komponent main-button:
    -Po najechaniu myszką na przycisk ten wydaje dźwięk.
    -Wykorzystałem NgClass w celu zmiany wartości transition aby w momecie gdy użytkownik najedzie myszką na przycisk ten minimalnie się powiększy, zaś w przypadku gdy ten go kliknie ten będzie się       
     powiększać do momentu gdy nie będzie go widać na ekranie. Po kliknięciu wyłączana jest również funkcja odpowiadająca za wydawanie dźwięku. 
    -W tym samym czasie jeżeli jeszcze nie istnieje, zostaje dodana do localstorage tablica z odblokowanymi poziomami użytkownika.
    -Na koniec użytkownik przenoszony jest do podstrony Settings.
Komponent Settings:

W komponencie settings znajduje się nagłówek, komponent difficulty oraz przycisk play.
  Komponent difficulty:
    - znajdują się w nim dwa przyciski jeden odpowiada za wybrany system, drugi zaś za poziom trudności
    - w momecie gdy użytkownik kliknie na przycisk lewym przyciskiem myszy wartość indeksu się zwiększa, zaś podczas użycia prawego przycisku zmniejsza i wyświetlana jest kolejna wartość z tablicy.       
      aktualnie wyświetlana wartość jest wysyłany do komponentu settings przy pomocy Output.
  Przycisk Play:
    - po kliknięciu na przycisk na przycisk wartości wysyłane przez Output z komponentu difficult zostają przekazane do localstorage oraz po 3 sekundach użytkownik przenoszony jest do podstrony levels.
Komponent levels:
    - Podczas inicjowanie strony tworzony serwis oblicza numer indexu tablicy z poziomami użytkownika znajdującymi się w localstorage, następnie z localstorage wyciąga wartość właśnie z tego indeksu.       
      Następnie wypełnia tablicę z poziomów wartościami true w przypadku gdy są odblokowane.
    - Następnie przy pomocy ngFor generowane są przyciski przenoszące do poziomów w przypadku gdy poziom nie jest odblokowany do przycisku dodawana jest odpowiednia klasa przy pomocy NgClass
    
