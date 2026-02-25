import React, { useState } from 'react';
import { useDroppable } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Card } from './Card';
import { Column as ColumnType, Card as CardType } from './types';
import { useKanban } from './KanbanBoard';

interface ColumnProps {
  column: ColumnType;
  cards: CardType[];
}

export const Column: React.FC<ColumnProps> = ({ column, cards }) => {
  const [isAddingCard, setIsAddingCard] = useState(false);
  const [newCardTitle, setNewCardTitle] = useState('');
  const { dispatch } = useKanban();

  const { setNodeRef } = useDroppable({
    id: column.id,
  });

  const handleAddCard = () => {
    if (newCardTitle.trim()) {
      dispatch({
        type: 'ADD_CARD',
        payload: { columnId: column.id, title: newCardTitle.trim() },
      });
      setNewCardTitle('');
      setIsAddingCard(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddCard();
    } else if (e.key === 'Escape') {
      setNewCardTitle('');
      setIsAddingCard(false);
    }
  };

  return (
    <div className="column">
      <div className="column-header">
        <h3>{column.title}</h3>
        <span className="card-count">{cards.length}</span>
      </div>
      
      <div ref={setNodeRef} className="column-content">
        <SortableContext items={cards.map(card => card.id)} strategy={verticalListSortingStrategy}>
          {cards.map(card => (
            <Card key={card.id} card={card} />
          ))}
        </SortableContext>
        
        {cards.length === 0 && (
          <div className="empty-state">
            <p>No cards yet</p>
          </div>
        )}
      </div>

      <div className="column-footer">
        {isAddingCard ? (
          <div className="add-card-form">
            <input
              type="text"
              value={newCardTitle}
              onChange={(e) => setNewCardTitle(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Enter card title..."
              className="card-input"
              autoFocus
            />
            <div className="add-card-actions">
              <button onClick={handleAddCard} className="add-btn">
                Add
              </button>
              <button 
                onClick={() => {
                  setIsAddingCard(false);
                  setNewCardTitle('');
                }} 
                className="cancel-btn"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <button 
            onClick={() => setIsAddingCard(true)}
            className="add-card-btn"
          >
            + Add Card
          </button>
        )}
      </div>
    </div>
  );
};
