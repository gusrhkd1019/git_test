export default function({ store, redirect }) {
  if(!store.state.users.user) {
    redirect('/field');
    return;
  }
  if(!store.state.users.user.field) {
    redirect('/field');
  }
}