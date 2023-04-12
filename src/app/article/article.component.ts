import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ArticleService } from '../article.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  constructor(private MS: ArticleService, private dialog: MatDialog) { }
  displayedColumns: string[] = ['id', 'titre', 'type', 'dateApparition' , 'auteur', 'icons'];
  dataSource = new MatTableDataSource(this.MS.tab);


  onDelete(id: string): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
    });

    dialogRef.afterClosed().pipe().subscribe((x) => {
      if (x) {
        this.MS.DeleteArticleById(id).then(() => {
          this.dataSource.data = this.MS.tab
        })
      }
    })
  }
}
