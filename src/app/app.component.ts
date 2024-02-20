import { Component } from '@angular/core';
import {AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firestore';

  constructor(private firestore: AngularFirestore) {}
  tutorials: Observable<any[]> | undefined;

  users: Observable<any[]> | undefined;

  collectionData: Observable<any[]> | undefined;

  
  ngOnInit() {
    // this.firestore.collection('myCollection').doc('myDoc').valueChanges().subscribe(data => {
    //   console.log(data)
    // });
    const data = {
      name: 'aman',
      age: 30,
      city: 'New York'
    };


    this.firestore.collection('users').add(data);

    // this.firestore.collection('users').doc('my-user-id').set(data);

    
    // this.firestore.collection('users').add(data)
    //   .then(() => {
    //     console.log('Data saved successfully!');
    //   })
    //   .catch(error => {
    //     console.error('Error saving data:', error);
    //   });

    // console.log(data)


    

    // this.tutorials = this.firestore.collection('users').snapshotChanges()
    // console.log(this.tutorials)
    // this.tutorials.pipe(
    //   map(changes =>
        
    //     changes.map((c: { payload: { doc: { id: any; data: () => any; }; }; }) =>
    //       ({ id: c.payload.doc.id, ...c.payload.doc.data() })
    //     )
    //   )
    // ).subscribe(data => {
    //   console.log(data);
    // });



    // this.firestore.collection('users').get()
    // .subscribe(querySnapshot => {
    //   querySnapshot.forEach((doc) => {
    //     console.log(doc)
    //   });

    //   console.log('The users collection was deleted successfully!');
    // }, error => {
    //   console.error('Error deleting users collection:', error);
    // });



    this.collectionData = this.firestore.collection('users').valueChanges();
    this.collectionData.subscribe(data => {
      console.log(data); // Log the data after it's received
    });

    console.log("id")

    this.tutorials = this.firestore.collection('users').snapshotChanges();
    this.tutorials.subscribe(data => {
      console.log(data); // Log the data after it's received
    });
    
    this.users = this.firestore.collection('users').snapshotChanges();




    const newData = {
      // Define the updated data for the user
      // For example, if you have a 'name' field, you can update it like this:
      name: 'Updated Name'
    };

    this.firestore.collection('users').doc('LstqP7OuarsiYD6uFN9z').update(newData)
      .then(() => {
        console.log(`User with ID ${ 'LstqP7OuarsiYD6uFN9z'} updated successfully.`);
      })
      .catch(error => {
        console.error(`Error updating user with ID ${ 'LstqP7OuarsiYD6uFN9z'}:`, error);
      });


      
   
  }



  deleteUser(userId: string) {
    this.firestore.collection('users').doc(userId).delete()
      .then(() => {
        console.log(`User with ID ${userId} deleted successfully.`);
      })
      .catch(error => {
        console.error(`Error deleting user with ID ${userId}:`, error);
      });
    }
}




