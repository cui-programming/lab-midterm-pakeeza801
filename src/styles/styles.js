import { StyleSheet } from 'react-native';

const colors = {
  appBackground: '#f0f2f5',
  cardBackground: '#ffffff', 
  primary: '#1c1e21',
  secondary: '#f0f8ff',
  success: '#4caf50',
  danger: '#e53935',
  default: '#757575',
  personalHeader: '#007bff',
  personalHeaderText: '#ffffff',
};

export const styles = StyleSheet.create({
  // Base styles
  baseText: {
    color: colors.primary,
    fontFamily: 'System',
  },
  appContainer: {
    flex: 1,
    backgroundColor: colors.appBackground,
    padding: 15,
  },
  
  // Custom Personal Header
  personalHeaderContainer: {
    backgroundColor: colors.personalHeader,
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  personalHeaderText: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.personalHeaderText,
  },
  
  // Card styles
  card: {
    backgroundColor: colors.cardBackground,
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  cardHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 10,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  aboutMeCard: {
    backgroundColor: colors.secondary, 
    borderLeftWidth: 5,
    borderLeftColor: '#007bff',
  },
  cardBodyText: {
    fontSize: 14,
    color: colors.default,
  },
  
  // Search and Add styles (Part D)
  input: {
    borderWidth: 1,
    borderColor: colors.default + '33',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#fff',
    color: colors.primary,
  },
  inputLabel: {
    fontSize: 14,
    color: colors.primary,
    marginBottom: 5,
    fontWeight: '600',
  },
  addRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addRowInput: {
    flex: 1,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: colors.default, 
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 70,
  },
  addButtonText: {
    color: colors.cardBackground,
    fontWeight: 'bold',
  },
  
  // Counter styles (Part C)
  counterItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  counterItemText: {
    fontSize: 17,
    fontWeight: '500',
    color: colors.primary,
    flex: 1,
  },
  counterValueText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 15,
    width: 40,
    textAlign: 'center',
    color: colors.primary,
    paddingVertical: 5,
    borderRadius: 4,
    backgroundColor: colors.appBackground,
  },
  button: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  minusButton: {
    backgroundColor: colors.danger,
  },
  plusButton: {
    backgroundColor: colors.success,
  },
  buttonText: {
    color: colors.cardBackground,
    fontSize: 22,
    lineHeight: 22,
    fontWeight: 'bold',
  },
});
