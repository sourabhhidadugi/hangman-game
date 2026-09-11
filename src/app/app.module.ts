import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HangmanComponent } from './components/hangman/hangman.component';
import { HangmanDisplayComponent } from './components/hangman-display/hangman-display.component';
import { HangmanKeyboardComponent } from './components/hangman-keyboard/hangman-keyboard.component';
import { HangmanQuestionComponent } from './components/hangman-question/hangman-question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';




@NgModule({ declarations: [
        AppComponent,
        HangmanComponent,
        HangmanDisplayComponent,
        HangmanKeyboardComponent,
        HangmanQuestionComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        BrowserAnimationsModule,
        MatGridListModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {}
